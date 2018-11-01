import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {BigNumber as BN} from "bignumber.js";
import MediaQuery from 'react-responsive';
import ReactGA from 'react-ga';
import { selectors, addPendingTx } from '../../ducks/web3connect';
import { CSSTransitionGroup } from "react-transition-group";
import Header from '../../components/Header';
import NavigationTabs from '../../components/NavigationTabs';
import Modal from '../../components/Modal';
import CurrencyInputPanel from '../../components/CurrencyInputPanel';
import OversizedPanel from '../../components/OversizedPanel';
import DropdownBlue from "../../assets/images/dropdown-blue.svg";
import DropupBlue from "../../assets/images/dropup-blue.svg";
import ArrowDown from '../../assets/images/arrow-down-blue.svg';
import EXCHANGE_ABI from '../../abi/exchange';

import "./swap.scss";
import promisify from "../../helpers/web3-promisfy";

const INPUT = 0;
const OUTPUT = 1;

class Swap extends Component {
  static propTypes = {
    account: PropTypes.string,
    isConnected: PropTypes.bool.isRequired,
    selectors: PropTypes.func.isRequired,
    addPendingTx: PropTypes.func.isRequired,
    web3: PropTypes.object.isRequired,
  };

  state = {
    inputValue: '',
    outputValue: '',
    inputCurrency: 'ETH',
    outputCurrency: '',
    inputAmountB: '',
    lastEditedField: '',
    showSummaryModal: false,
  };

  componentWillMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  reset() {
    this.setState({
      inputValue: '',
      outputValue: '',
      inputAmountB: '',
      lastEditedField: '',
      showSummaryModal: false,
    });
  }

  componentWillReceiveProps() {
    this.recalcForm();
  }

  validate() {
    const { selectors, account } = this.props;
    const {
      inputValue, outputValue,
      inputCurrency, outputCurrency,
    } = this.state;

    let inputError = '';
    let outputError = '';
    let isValid = true;
    let isUnapproved = this.isUnapproved();
    const inputIsZero = BN(inputValue).isZero();
    const outputIsZero = BN(outputValue).isZero();

    if (!inputValue || inputIsZero || !outputValue || outputIsZero || !inputCurrency || !outputCurrency || isUnapproved) {
      isValid = false;
    }

    const { value: inputBalance, decimals: inputDecimals } = selectors().getBalance(account, inputCurrency);

    if (inputBalance.isLessThan(BN(inputValue * 10 ** inputDecimals))) {
      inputError = 'Insufficient Balance';
    }

    if (inputValue === 'N/A') {
      inputError = 'Not a valid input value';
    }

    return {
      inputError,
      outputError,
      isValid: isValid && !inputError && !outputError,
    };
  }

  isUnapproved() {
    const { account, exchangeAddresses, selectors } = this.props;
    const { inputCurrency, inputValue } = this.state;

    if (!inputCurrency || inputCurrency === 'ETH') {
      return false;
    }

    const { value: allowance, label, decimals } = selectors().getApprovals(
      inputCurrency,
      account,
      exchangeAddresses.fromToken[inputCurrency]
    );

    if (label && allowance.isLessThan(BN(inputValue * 10 ** decimals || 0))) {
      return true;
    }

    return false;
  }

  recalcForm() {
    const { inputCurrency, outputCurrency, lastEditedField } = this.state;

    if (!inputCurrency || !outputCurrency) {
      return;
    }

    const editedValue = lastEditedField === INPUT ? this.state.inputValue : this.state.outputValue;

    if (BN(editedValue).isZero()) {
      return;
    }

    if (inputCurrency === outputCurrency) {
      this.setState({
        inputValue: '',
        outputValue: '',
      });
      return;
    }

    if (inputCurrency !== 'ETH' && outputCurrency !== 'ETH') {
      this.recalcTokenTokenForm();
      return;
    }

    this.recalcEthTokenForm();
  }

  recalcTokenTokenForm = () => {
    const {
      exchangeAddresses: { fromToken },
      selectors,
    } = this.props;

    const {
      inputValue: oldInputValue,
      outputValue: oldOutputValue,
      inputCurrency,
      outputCurrency,
      lastEditedField,
      exchangeRate: oldExchangeRate,
      inputAmountB: oldInputAmountB,
    } = this.state;

    const exchangeAddressA = fromToken[inputCurrency];
    const exchangeAddressB = fromToken[outputCurrency];

    const { value: inputReserveA, decimals: inputDecimalsA } = selectors().getBalance(exchangeAddressA, inputCurrency);
    const { value: outputReserveA }= selectors().getBalance(exchangeAddressA, 'ETH');
    const { value: inputReserveB } = selectors().getBalance(exchangeAddressB, 'ETH');
    const { value: outputReserveB, decimals: outputDecimalsB }= selectors().getBalance(exchangeAddressB, outputCurrency);

    if (lastEditedField === INPUT) {
      if (!oldInputValue) {
        return this.setState({
          outputValue: '',
          exchangeRate: BN(0),
        });
      }

      const inputAmountA = BN(oldInputValue).multipliedBy(10 ** inputDecimalsA);
      const outputAmountA = calculateEtherTokenOutput({
        inputAmount: inputAmountA,
        inputReserve: inputReserveA,
        outputReserve: outputReserveA,
      });
      // Redundant Variable for readability of the formala
      // OutputAmount from the first swap becomes InputAmount of the second swap
      const inputAmountB = outputAmountA;
      const outputAmountB = calculateEtherTokenOutput({
        inputAmount: inputAmountB,
        inputReserve: inputReserveB,
        outputReserve: outputReserveB,
      });

      const outputValue = outputAmountB.dividedBy(BN(10 ** outputDecimalsB)).toFixed(7);
      const exchangeRate = BN(outputValue).dividedBy(BN(oldInputValue));

      const appendState = {};

      if (!exchangeRate.isEqualTo(BN(oldExchangeRate))) {
        appendState.exchangeRate = exchangeRate;
      }

      if (outputValue !== oldOutputValue) {
        appendState.outputValue = outputValue;
      }

      this.setState(appendState);
    }

    if (lastEditedField === OUTPUT) {
      if (!oldOutputValue) {
        return this.setState({
          inputValue: '',
          exchangeRate: BN(0),
        });
      }

      const outputAmountB = BN(oldOutputValue).multipliedBy(10 ** outputDecimalsB);
      const inputAmountB = calculateEtherTokenInput({
        outputAmount: outputAmountB,
        inputReserve: inputReserveB,
        outputReserve: outputReserveB,
      });

      // Redundant Variable for readability of the formala
      // InputAmount from the first swap becomes OutputAmount of the second swap
      const outputAmountA = inputAmountB;
      const inputAmountA = calculateEtherTokenInput({
        outputAmount: outputAmountA,
        inputReserve: inputReserveA,
        outputReserve: outputReserveA,
      });

      const inputValue = inputAmountA.isNegative()
        ? 'N/A'
        : inputAmountA.dividedBy(BN(10 ** inputDecimalsA)).toFixed(7);
      const exchangeRate = BN(oldOutputValue).dividedBy(BN(inputValue));

      const appendState = {};

      if (!exchangeRate.isEqualTo(BN(oldExchangeRate))) {
        appendState.exchangeRate = exchangeRate;
      }

      if (inputValue !== oldInputValue) {
        appendState.inputValue = inputValue;
      }

      if (!inputAmountB.isEqualTo(BN(oldInputAmountB))) {
        appendState.inputAmountB = inputAmountB;
      }

      this.setState(appendState);
    }

  };

  recalcEthTokenForm = () => {
    const {
      exchangeAddresses: { fromToken },
      selectors,
    } = this.props;

    const {
      inputValue: oldInputValue,
      outputValue: oldOutputValue,
      inputCurrency,
      outputCurrency,
      lastEditedField,
      exchangeRate: oldExchangeRate,
    } = this.state;

    const tokenAddress = [inputCurrency, outputCurrency].filter(currency => currency !== 'ETH')[0];
    const exchangeAddress = fromToken[tokenAddress];
    if (!exchangeAddress) {
      return;
    }
    const { value: inputReserve, decimals: inputDecimals } = selectors().getBalance(exchangeAddress, inputCurrency);
    const { value: outputReserve, decimals: outputDecimals }= selectors().getBalance(exchangeAddress, outputCurrency);

    if (lastEditedField === INPUT) {
      if (!oldInputValue) {
        return this.setState({
          outputValue: '',
          exchangeRate: BN(0),
        });
      }

      const inputAmount = BN(oldInputValue).multipliedBy(10 ** inputDecimals);
      const outputAmount = calculateEtherTokenOutput({ inputAmount, inputReserve, outputReserve });
      const outputValue = outputAmount.dividedBy(BN(10 ** outputDecimals)).toFixed(7);
      const exchangeRate = BN(outputValue).dividedBy(BN(oldInputValue));

      const appendState = {};

      if (!exchangeRate.isEqualTo(BN(oldExchangeRate))) {
        appendState.exchangeRate = exchangeRate;
      }

      if (outputValue !== oldOutputValue) {
        appendState.outputValue = outputValue;
      }

      this.setState(appendState);
    } else if (lastEditedField === OUTPUT) {
      if (!oldOutputValue) {
        return this.setState({
          inputValue: '',
          exchangeRate: BN(0),
        });
      }

      const outputAmount = BN(oldOutputValue).multipliedBy(10 ** outputDecimals);
      const inputAmount = calculateEtherTokenInput({ outputAmount, inputReserve, outputReserve });
      const inputValue = inputAmount.isNegative()
        ? 'N/A'
        : inputAmount.dividedBy(BN(10 ** inputDecimals)).toFixed(7);
      const exchangeRate = BN(oldOutputValue).dividedBy(BN(inputValue));

      const appendState = {};

      if (!exchangeRate.isEqualTo(BN(oldExchangeRate))) {
        appendState.exchangeRate = exchangeRate;
      }

      if (inputValue !== oldInputValue) {
        appendState.inputValue = inputValue;
      }

      this.setState(appendState);
    }
  };

  updateInput = amount => {
    this.setState({
      inputValue: amount,
      lastEditedField: INPUT,
    }, this.recalcForm);
  };

  updateOutput = amount => {
    this.setState({
      outputValue: amount,
      lastEditedField: OUTPUT,
    }, this.recalcForm);
  };

  onSwap = async () => {
    const {
      exchangeAddresses: { fromToken },
      account,
      web3,
      selectors,
      addPendingTx,
    } = this.props;
    const {
      inputValue,
      outputValue,
      inputCurrency,
      outputCurrency,
      inputAmountB,
      lastEditedField,
    } = this.state;
    const ALLOWED_SLIPPAGE = 0.025;
    const TOKEN_ALLOWED_SLIPPAGE = 0.04;

    const type = getSwapType(inputCurrency, outputCurrency);
    const { decimals: inputDecimals } = selectors().getBalance(account, inputCurrency);
    const { decimals: outputDecimals } = selectors().getBalance(account, outputCurrency);
    const blockNumber = await promisify(web3, 'getBlockNumber');
    const block = await promisify(web3, 'getBlock', blockNumber);
    const deadline =  block.timestamp + 300;

    if (lastEditedField === INPUT) {
      // swap input
      ReactGA.event({
        category: type,
        action: 'SwapInput',
      });
      switch(type) {
        case 'ETH_TO_TOKEN':
          // let exchange = new web3.eth.Contract(EXCHANGE_ABI, fromToken[outputCurrency]);
          new web3.eth.Contract(EXCHANGE_ABI, fromToken[outputCurrency])
            .methods
            .ethToTokenSwapInput(
              BN(outputValue).multipliedBy(10 ** outputDecimals).multipliedBy(1 - ALLOWED_SLIPPAGE).toFixed(0),
              deadline,
            )
            .send({
              from: account,
              value: BN(inputValue).multipliedBy(10 ** 18).toFixed(0),
            }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        case 'TOKEN_TO_ETH':
          new web3.eth.Contract(EXCHANGE_ABI, fromToken[inputCurrency])
            .methods
            .tokenToEthSwapInput(
              BN(inputValue).multipliedBy(10 ** inputDecimals).toFixed(0),
              BN(outputValue).multipliedBy(10 ** outputDecimals).multipliedBy(1 - ALLOWED_SLIPPAGE).toFixed(0),
              deadline,
            )
            .send({ from: account }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        case 'TOKEN_TO_TOKEN':
          new web3.eth.Contract(EXCHANGE_ABI, fromToken[inputCurrency])
            .methods
            .tokenToTokenSwapInput(
              BN(inputValue).multipliedBy(10 ** inputDecimals).toFixed(0),
              BN(outputValue).multipliedBy(10 ** outputDecimals).multipliedBy(1 - TOKEN_ALLOWED_SLIPPAGE).toFixed(0),
              '1',
              deadline,
              outputCurrency,
            )
            .send({ from: account }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        default:
          break;
      }
    }

    if (lastEditedField === OUTPUT) {
      // swap output
      ReactGA.event({
        category: type,
        action: 'SwapOutput',
      });
      switch (type) {
        case 'ETH_TO_TOKEN':
          new web3.eth.Contract(EXCHANGE_ABI, fromToken[outputCurrency])
            .methods
            .ethToTokenSwapOutput(
              BN(outputValue).multipliedBy(10 ** outputDecimals).toFixed(0),
              deadline,
            )
            .send({
              from: account,
              value: BN(inputValue).multipliedBy(10 ** inputDecimals).multipliedBy(1 + ALLOWED_SLIPPAGE).toFixed(0),
            }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        case 'TOKEN_TO_ETH':
          new web3.eth.Contract(EXCHANGE_ABI, fromToken[inputCurrency])
            .methods
            .tokenToEthSwapOutput(
              BN(outputValue).multipliedBy(10 ** outputDecimals).toFixed(0),
              BN(inputValue).multipliedBy(10 ** inputDecimals).multipliedBy(1 + ALLOWED_SLIPPAGE).toFixed(0),
              deadline,
            )
            .send({ from: account }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        case 'TOKEN_TO_TOKEN':
          if (!inputAmountB) {
            return;
          }

          new web3.eth.Contract(EXCHANGE_ABI, fromToken[inputCurrency])
            .methods
            .tokenToTokenSwapOutput(
              BN(outputValue).multipliedBy(10 ** outputDecimals).toFixed(0),
              BN(inputValue).multipliedBy(10 ** inputDecimals).multipliedBy(1 + TOKEN_ALLOWED_SLIPPAGE).toFixed(0),
              inputAmountB.multipliedBy(1.2).toFixed(0),
              deadline,
              outputCurrency,
            )
            .send({ from: account }, (err, data) => {
              if (!err) {
                addPendingTx(data);
                this.reset();
              }
            });
          break;
        default:
          break;
      }
    }
  };

  renderSummary() {
    const {
      inputValue,
      inputCurrency,
      outputValue,
      outputCurrency,
    } = this.state;

    const inputIsZero = BN(inputValue).isZero();
    const outputIsZero = BN(outputValue).isZero();

    if (!inputCurrency || !outputCurrency) {
      return (
        <div className="swap__summary-wrapper">
          <div>Select a token to continue.</div>
        </div>
      )
    }

    if (!inputValue || !outputValue) {
      return (
        <div className="swap__summary-wrapper">
          <div>Enter a value to continue.</div>
        </div>
      )
    }

    if (inputIsZero || outputIsZero) {
      return (
        <div className="swap__summary-wrapper">
          <div>No liquidity.</div>
        </div>
      )
    }

    if (this.isUnapproved()) {
      return (
        <div className="swap__summary-wrapper">
          <div>Please unlock token to continue.</div>
        </div>
      );
    }

    return [
      <div
        key="open-details"
        className="swap__summary-wrapper swap__open-details-container"
        onClick={() => this.setState({showSummaryModal: true})}
      >
        <span>Transaction Details</span>
        <img src={DropdownBlue} />
      </div>,
      this.renderSummaryModal()
    ];
  }

  renderSummaryModal() {
    const {
      inputValue,
      inputCurrency,
      outputValue,
      outputCurrency,
      lastEditedField,
    } = this.state;
    const { selectors, account } = this.props;
    if (!this.state.showSummaryModal) {
      return null;
    }

    ReactGA.event({
      category: 'TransactionDetail',
      action: 'Open',
    });

    const ALLOWED_SLIPPAGE = 0.025;
    const TOKEN_ALLOWED_SLIPPAGE = 0.04;

    const type = getSwapType(inputCurrency, outputCurrency);
    const { label: inputLabel, decimals: inputDecimals } = selectors().getBalance(account, inputCurrency);
    const { label: outputLabel, decimals: outputDecimals } = selectors().getBalance(account, outputCurrency);

    const label = lastEditedField === INPUT ? outputLabel : inputLabel;
    let minOutput;
    let maxInput;

    if (lastEditedField === INPUT) {
      switch(type) {
        case 'ETH_TO_TOKEN':
          minOutput = BN(outputValue).multipliedBy(1 - ALLOWED_SLIPPAGE).toFixed(7).trim();
          break;
        case 'TOKEN_TO_ETH':
          minOutput = BN(outputValue).multipliedBy(1 - ALLOWED_SLIPPAGE).toFixed(7);
          break;
        case 'TOKEN_TO_TOKEN':
          minOutput = BN(outputValue).multipliedBy(1 - TOKEN_ALLOWED_SLIPPAGE).toFixed(7);
          break;
        default:
          break;
      }
    }

    if (lastEditedField === OUTPUT) {
      switch (type) {
        case 'ETH_TO_TOKEN':
          maxInput = BN(inputValue).multipliedBy(1 + ALLOWED_SLIPPAGE).toFixed(7).trim();
          break;
        case 'TOKEN_TO_ETH':
          maxInput = BN(inputValue).multipliedBy(1 + ALLOWED_SLIPPAGE).toFixed(7);
          break;
        case 'TOKEN_TO_TOKEN':
          maxInput = BN(inputValue).multipliedBy(1 + TOKEN_ALLOWED_SLIPPAGE).toFixed(7);
          break;
        default:
          break;
      }
    }

    let description;
    if (lastEditedField === INPUT) {
      description = (
        <div>
          <div>
            You are selling {b(`${+inputValue} ${inputLabel}`)}.
          </div>
          <div className="send__last-summary-text">
            You will receive between {b(`${+minOutput} ${outputLabel}`)} and {b(`${+outputValue} ${outputLabel}`)}.
          </div>
        </div>
      );
    } else {
      description = (
        <div>
          <div>
            You are selling between {b(`${+inputValue} ${inputLabel}`)} to {b(`${+maxInput} ${inputLabel}`)}.
          </div>
          <div className="send__last-summary-text">
            You will receive {b(`${+outputValue} ${outputLabel}`)}.
          </div>
        </div>
      );
    }

    return (
      <Modal key="modal" onClose={() => this.setState({ showSummaryModal: false })}>
        <CSSTransitionGroup
          transitionName="summary-modal"
          transitionAppear={true}
          transitionLeave={true}
          transitionAppearTimeout={200}
          transitionLeaveTimeout={200}
          transitionEnterTimeout={200}
        >
          <div className="swap__summary-modal">
            <div
              key="open-details"
              className="swap__open-details-container"
              onClick={() => this.setState({showSummaryModal: false})}
            >
              <span>Transaction Details</span>
              <img src={DropupBlue} />
            </div>
            {description}
          </div>
        </CSSTransitionGroup>
      </Modal>
    );
  }

  renderExchangeRate() {
    const { account, selectors } = this.props;
    const { exchangeRate, inputCurrency, outputCurrency } = this.state;
    const { label: inputLabel } = selectors().getBalance(account, inputCurrency);
    const { label: outputLabel } = selectors().getBalance(account, outputCurrency);

    if (!exchangeRate || exchangeRate.isNaN() || !inputCurrency || !outputCurrency) {
      return (
        <OversizedPanel hideBottom>
          <div className="swap__exchange-rate-wrapper">
            <span className="swap__exchange-rate">Exchange Rate</span>
            <span> - </span>
          </div>
        </OversizedPanel>
      );
    }

    return (
      <OversizedPanel hideBottom>
        <div className="swap__exchange-rate-wrapper">
          <span className="swap__exchange-rate">Exchange Rate</span>
          <span>
            {`1 ${inputLabel} = ${exchangeRate.toFixed(7)} ${outputLabel}`}
          </span>
        </div>
      </OversizedPanel>
    );
  }

  render() {
    const { selectors, account } = this.props;
    const {
      lastEditedField,
      inputCurrency,
      outputCurrency,
      inputValue,
      outputValue,
    } = this.state;
    const estimatedText = '(estimated)';

    const { value: inputBalance, decimals: inputDecimals } = selectors().getBalance(account, inputCurrency);
    const { value: outputBalance, decimals: outputDecimals } = selectors().getBalance(account, outputCurrency);

    const { inputError, outputError, isValid } = this.validate();

    return (
      <div className="swap">
        <MediaQuery query="(max-device-width: 767px)">
          <Header />
        </MediaQuery>
        <div
          className={classnames('swap__content', {
            'swap--inactive': !this.props.isConnected,
          })}
        >
          <NavigationTabs
            className={classnames('header__navigation', {
              'header--inactive': !this.props.isConnected,
            })}
          />
          <CurrencyInputPanel
            title="Input"
            description={lastEditedField === OUTPUT ? estimatedText : ''}
            extraText={inputCurrency
              ? `Balance: ${inputBalance.dividedBy(BN(10 ** inputDecimals)).toFixed(4)}`
              : ''
            }
            onCurrencySelected={inputCurrency => this.setState({ inputCurrency }, this.recalcForm)}
            onValueChange={this.updateInput}
            selectedTokens={[inputCurrency, outputCurrency]}
            selectedTokenAddress={inputCurrency}
            value={inputValue}
            errorMessage={inputError}
          />
          <OversizedPanel>
            <div className="swap__down-arrow-background">
              <img className="swap__down-arrow" src={ArrowDown} />
            </div>
          </OversizedPanel>
          <CurrencyInputPanel
            title="Output"
            description={lastEditedField === INPUT ? estimatedText : ''}
            extraText={outputCurrency
              ? `Balance: ${outputBalance.dividedBy(BN(10 ** outputDecimals)).toFixed(4)}`
              : ''
            }
            onCurrencySelected={outputCurrency => this.setState({ outputCurrency }, this.recalcForm)}
            onValueChange={this.updateOutput}
            selectedTokens={[inputCurrency, outputCurrency]}
            value={outputValue}
            selectedTokenAddress={outputCurrency}
            errorMessage={outputError}
            disableUnlock
          />
          { this.renderExchangeRate() }
          <div className="swap__cta-container">
            <button
              className={classnames('swap__cta-btn', {
                'swap--inactive': !this.props.isConnected,
              })}
              disabled={!isValid}
              onClick={this.onSwap}
            >
              Swap
            </button>
          </div>
        </div>
        { this.renderSummary() }
      </div>
    );
  }
}

export default connect(
  state => ({
    balances: state.web3connect.balances,
    isConnected: !!state.web3connect.account && state.web3connect.networkId == (process.env.REACT_APP_NETWORK_ID||1),
    account: state.web3connect.account,
    web3: state.web3connect.web3,
    exchangeAddresses: state.addresses.exchangeAddresses,
  }),
  dispatch => ({
    selectors: () => dispatch(selectors()),
    addPendingTx: id => dispatch(addPendingTx(id)),
  }),
)(Swap);

const b = text => <span className="swap__highlight-text">{text}</span>;

function calculateEtherTokenOutput({ inputAmount: rawInput, inputReserve: rawReserveIn, outputReserve: rawReserveOut }) {
  const inputAmount = BN(rawInput);
  const inputReserve = BN(rawReserveIn);
  const outputReserve = BN(rawReserveOut);

  if (inputAmount.isLessThan(BN(10 ** 9))) {
    console.warn(`inputAmount is only ${inputAmount.toFixed(0)}. Did you forget to multiply by 10 ** decimals?`);
  }

  const numerator = inputAmount.multipliedBy(outputReserve).multipliedBy(997);
  const denominator = inputReserve.multipliedBy(1000).plus(inputAmount.multipliedBy(997));

  return numerator.dividedBy(denominator);
}

function calculateEtherTokenInput({ outputAmount: rawOutput, inputReserve: rawReserveIn, outputReserve: rawReserveOut }) {
  const outputAmount = BN(rawOutput);
  const inputReserve = BN(rawReserveIn);
  const outputReserve = BN(rawReserveOut);

  if (outputAmount.isLessThan(BN(10 ** 9))) {
    console.warn(`inputAmount is only ${outputAmount.toFixed(0)}. Did you forget to multiply by 10 ** decimals?`);
  }

  const numerator = outputAmount.multipliedBy(inputReserve).multipliedBy(1000);
  const denominator = outputReserve.minus(outputAmount).multipliedBy(997);
  return numerator.dividedBy(denominator.plus(1));
}

function getSwapType(inputCurrency, outputCurrency) {
  if (!inputCurrency || !outputCurrency) {
    return;
  }

  if (inputCurrency === outputCurrency) {
    return;
  }

  if (inputCurrency !== 'ETH' && outputCurrency !== 'ETH') {
    return 'TOKEN_TO_TOKEN'
  }

  if (inputCurrency === 'ETH') {
    return 'ETH_TO_TOKEN';
  }

  if (outputCurrency === 'ETH') {
    return 'TOKEN_TO_ETH';
  }

  return;
}