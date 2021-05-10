import React, { createContext, useReducer } from 'react'



// Initial state for context 
export const initialValues = {
    returnValue: false,
    addSlipError: (): void => undefined,
    removeSlipError: (): void => undefined,
}

export const SlippageContext = createContext(initialValues)


type State = {
    returnValue: boolean | null
}

type Action = {
    type: "Add" | "Remove"
}


export function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'Add':
            return { returnValue: true }
        case 'Remove':
            return { returnValue: false }
        default:
            throw new Error();
    }
}

