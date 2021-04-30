import React, { useReducer, createContext } from 'react'

type Action = {
  type: string
}

type State = {
  slipWarning: boolean | null
}


export const initialState = { slipWarning: false }

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'Set':
      return { slipWarning: true }
    case 'Remove':
      return { slipWarning: false }
    default:
      throw new Error();
  }
}

export function innerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'Set':
      return { slipWarning: true }
    case 'Remove':
      return { slipWarning: false }
    default:
      throw new Error();
  }
}

class SlippageController {
  slipWarningState: boolean;

  constructor() {
    this.slipWarningState = false;
  }

  setWarning(){
    this.slipWarningState = true;
  }

  removeWarning(){
    this.slipWarningState = false;
  }

  fetchWarning(){
    return this.slipWarningState;
  }

}

export default new SlippageController()
