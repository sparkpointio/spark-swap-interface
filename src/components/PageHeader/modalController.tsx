import React, { useReducer } from 'react'

type action = {
  type: string
}

type state = {
  Error: boolean | null
}

export const initialState = { Error: false }

export function reducer(state: state, action: action) {
  switch (action.type) {
    case 'Set Error':
      console.log('errasdas')
      return { Error: true }
    case 'Remove Error':
        console.log('efas')
      return {
        Error: false,
      }
    default:
      throw new Error();
  }
}
