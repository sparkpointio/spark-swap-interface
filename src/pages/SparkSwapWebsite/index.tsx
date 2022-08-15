import React, { useEffect, useRef } from 'react'
import * as AppSections from './components'
import './assets/fonts/quatro/stylesheet.css'
import './components/styles/_style.css'

const Sections = (AppSections as unknown) as { [key: string]: React.FC }
const App = () => {
  useEffect(() => {
    document.title = 'SparkSwap - The preferred DeFi exchange on Binance Smart Chain (BSC)'
  })

  return (
    <>
      {Object.keys(Sections).map(function (key, index) {
        const Section = Sections[key] as React.FC
        return (
          <Section key={key} />
        )
      })}
    </>
  )
}

export default App
