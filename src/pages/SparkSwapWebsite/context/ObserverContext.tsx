import React, { createContext, Dispatch, useCallback, useState } from 'react'

interface RefsContextType {
  active: any
  handleActive:  (string) => void
}

export const ObserverContext = createContext<RefsContextType>({active: false,  handleActive: (string) => null })

export const ObserverContextProvider: React.FC = ({children}) => {

  const [ active, setActive ] = useState({section: '', status: false});
  const handleActive = useCallback((status: any) => {
    setActive({section: status.section, status: status.status})
  }, [])

  return (
    <ObserverContext.Provider value={{active, handleActive}}>
      {children}
    </ObserverContext.Provider>
  )
}