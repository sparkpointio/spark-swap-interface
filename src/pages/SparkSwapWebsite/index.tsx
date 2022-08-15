import React, { useEffect, useRef } from 'react'
import * as AppSections from './components'
import './assets/fonts/quatro/stylesheet.css'
import './components/styles/_style.css'

const Sections = (AppSections as unknown) as { [key: string]: React.FC }
const App = () => {
  useEffect(() => {
    document.title = 'SparkSwap - The preferred DeFi exchange on Binance Smart Chain (BSC)'
  })
  
  const Navigation = useRef(null)
  const Hero = useRef(null)
  const Unlock = useRef(null)
  const Platform = useRef(null)
  const PoweredByBSC = useRef(null)
  const SfuelToken = useRef(null)
  const SfuelFeatures = useRef(null)
  const Team = useRef(null)
  const Roadmap = useRef(null)
  const Exchanges = useRef(null)
  const OnlineCommunities = useRef(null)
  const ContactUs = useRef(null)
  const Footer = useRef(null)
  
  const refs = [Navigation, Hero, Unlock, Platform, PoweredByBSC, SfuelToken, SfuelFeatures, Team, Roadmap, Exchanges, OnlineCommunities, ContactUs, Footer]

  return (
    <>
      {Object.keys(Sections).map(function (key, index) {
        const Section = Sections[key] as React.FC
        return (
          <div ref={refs[index]} style={{width: '100%'}}>
            <Section key={key} />
          </div>
        )
      })}
    </>
  )
}

export default App
