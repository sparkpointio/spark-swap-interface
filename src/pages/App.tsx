import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from '@sparkpointio/sparkswap-uikit';
import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from 'components/Popups'
import ToastListener from 'components/ToastListener';
import Web3ReactManager from '../components/Web3ReactManager'
import AddLiquidity from './AddLiquidity'
import {
    RedirectDuplicateTokenIds,
    RedirectOldAddLiquidityPathStructure,
    RedirectToAddLiquidity, RedirectToLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import PoolFinder from './PoolFinder'
import History from './History'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { allLanguages, EN } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
import PageBanner from './Banner'
import DappsBanner from './DappsBanner'
import Menu from '../components/Menu'
import WebsiteNav from './SparkSwapWebsite/components/Navigation'
import Website from './SparkSwapWebsite';



const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // padding: 32px 16px;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  min-height: calc(100vh - 65px);
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  background-image: url('/static/media/bg.bfd323f2.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  const fileId = 6

  const credentials: Credentials = {
    token: apiKey
  }

  const stringTranslationsApi = new StringTranslations(credentials)

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter(language => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem('pancakeSwapLanguage')
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  const fetchTranslationsForSelectedLanguage = async () => {
    stringTranslationsApi
      .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
      .then(translationApiResponse => {
        if (translationApiResponse.data.length < 1) {
          setTranslations(['error'])
        } else {
          setTranslations(translationApiResponse.data)
        }
      })
      .then(() => setTranslatedLanguage(selectedLanguage))
      .catch(error => {
        setTranslations(['error'])
        console.error(error)
      })
  }

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
            <Switch>
              {/* APP HERE */}
              {/* Menu here */}
              <Route path='/' component={Website}  exact/>
              {/* <Website /> */}
              {/* Footer here */}
              <Menu>
                <BodyWrapper>
                  <Popups />
                  <Web3ReactManager>
                    <>
                      <Route exact strict path='/swap' component={Swap} />
                      <Route exact strict path='/swap/:outputCurrency' component={RedirectToSwap} />
                      <Route exact strict path='/send' component={RedirectPathToSwapOnly} />
                      <Route exact strict path='/find' component={PoolFinder} />
                      <Route
                        exact
                        path='/farms'
                        component={() => {
                          window.location.replace('https://app.srk.finance/#/stake');
                          return null
                        }}
                      />
                      <Route
                        exact
                        path='/pools'
                        component={() => {
                          window.location.replace('https://app.srk.finance/#/stake');
                          return null
                        }}
                      />
                      <Route
                        exact
                        path='/airdrop'
                        component={() => {
                          window.location.replace('https://app.srk.finance/#/airdrop');
                          return null
                        }}
                      />
                      <Route exact strict path="/pool" component={RedirectToLiquidity} />
                      <Route exact strict path="/liquidity" component={Pool} />
                      <Route exact strict path='/history' component={History} />
                      <Route exact strict path='/create' component={RedirectToAddLiquidity} />
                      <Route exact path='/add' component={AddLiquidity} />
                      <Route exact path='/add/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />
                      <Route exact path='/add/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />
                      <Route exact strict path='/remove/v1/:address' component={RemoveV1Exchange} />
                      <Route exact strict path='/remove/:tokens' component={RedirectOldRemoveLiquidityPathStructure} />
                      <Route exact strict path='/remove/:currencyIdA/:currencyIdB' component={RemoveLiquidity} />
                      <Route exact strict path='/migrate/v1' component={MigrateV1} />
                      <Route exact strict path='/migrate/v1/:address' component={MigrateV1Exchange} />
                      <Route exact string path='/teams' component={() => {
                        window.location.href = "https://srk.finance/team"
                        return null
                        }}/>
                      {/* <Route component={RedirectPathToSwapOnly} /> */}
                    </>
                  </Web3ReactManager>
                  <DappsBanner />
                  <Marginer />
                  <PageBanner />
                </BodyWrapper>
                <Footer
                  helperLinks={[
                    {
                      label: 'Terms and Conditions',
                      href: 'https://sparkpointio.github.io/terms_and_conditions/sparkswap/',
                    },
                    {
                      label: 'Privacy',
                      href: 'https://sparkpointio.github.io/privacy_policies/sparkswap/',
                    },
                    {
                      label: 'Sitemap',
                      href: 'https://srk.finance/#roadmap',
                    },
                  ]}
                  socLinks={[
                    {
                      label: 'facebook',
                      href: 'https://www.facebook.com/sparkpointio/',
                    },
                    {
                      label: 'twitter',
                      href: 'https://twitter.com/sparkpointio',
                    },
                    {
                      label: 'telegram',
                      href: 'https://t.me/SparkPointOfficial',
                    },
                    {
                      label: 'email',
                      href: 'mailto: support@sparkpoint.io',
                    },
                    {
                      label: 'discord',
                      href: 'https://discord.com/invite/Sgc6yDEAAe',
                    },
                  ]}
                />
              </Menu>
              </Switch>
              <ToastListener />
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
