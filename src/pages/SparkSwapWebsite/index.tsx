import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import usePrevious from 'hooks/usePrevious'
import { useInView } from 'react-intersection-observer'
import * as AppSections from './components'
import './assets/fonts/quatro/stylesheet.css'
import './components/styles/_style.css'
import useObserver from './hooks/useObserver'


const Sections = (AppSections as unknown) as { [key: string]: React.FC }
const App = () => {
  const { active, handleActive} = useObserver()
  useEffect(() => {
    document.title = 'SparkSwap - The preferred DeFi exchange on Binance Smart Chain (BSC)'
  })
  const { ref: Home, inView: HeroVisible } = useInView()
  const { ref: UnlockRef, inView: UnlockVisible } = useInView()
  const { ref: Features, inView: PlatformVisible } = useInView()
  const { ref: PoweredByBSCRef, inView: PoweredByBSCVisible } = useInView()
  const { ref: Governance, inView: SfuelTokenVisible } = useInView()
  const { ref: SfuelFeaturesRef, inView: SfuelFeaturesVisible } = useInView()
  const { ref: Team, inView: TeamVisible } = useInView()
  const { ref: Roadmap, inView: RoadmapVisible } = useInView()
  const { ref: ExchangesRef, inView: ExchangesVisible } = useInView()
  const { ref: OnlineCommunitiesRef, inView: OnlineCommunitiesVisible } = useInView()
  const { ref: ContactUs, inView: ContactUsVisible } = useInView()

  const previousHeroVisible = usePrevious(HeroVisible)
  const previousPlatformVisible = usePrevious(PlatformVisible)
  const previousGovernanceVisible = usePrevious(SfuelTokenVisible)
  const previousTeamVisible = usePrevious(TeamVisible)
  const previousRoadmapVisible = usePrevious(RoadmapVisible)
  const previousContactVisible = usePrevious(ContactUsVisible)

  useEffect(() => {
    if (HeroVisible !== previousHeroVisible) {
      handleActive({section: 'Home', status: HeroVisible})
    }
    if (PlatformVisible !== previousPlatformVisible){
      handleActive({section: 'Features', status: PlatformVisible})
    }
    if (SfuelTokenVisible !== previousGovernanceVisible){
      handleActive({section: 'Governance', status: SfuelTokenVisible})
    }
    if (TeamVisible !== previousTeamVisible){
      handleActive({section: 'Team', status: TeamVisible})
    }
    if (RoadmapVisible !== previousRoadmapVisible){
      handleActive({section: 'Roadmap', status: RoadmapVisible})
    }
    if (ContactUsVisible !== previousContactVisible){
      handleActive({section: 'Contact Us', status: ContactUsVisible})
    }
  }, [handleActive, Home, HeroVisible, PlatformVisible, SfuelTokenVisible, TeamVisible, RoadmapVisible, ContactUsVisible, previousHeroVisible, previousPlatformVisible, previousGovernanceVisible, previousTeamVisible, previousRoadmapVisible, previousContactVisible])

  return (
    <>
      <AppSections.Navigation>
        <></>
      </AppSections.Navigation>
      <Container ref={Home}>
        <AppSections.Hero />
      </Container>
      <Container ref={UnlockRef}>
        <AppSections.Unlock />
      </Container>
      <Container ref={Features}>
        <AppSections.Platform />
      </Container>
      <Container ref={PoweredByBSCRef}>
        <AppSections.PoweredByBSC />
      </Container>
      <Container ref={Governance}>
        <AppSections.SfuelToken />
      </Container>
      <Container ref={SfuelFeaturesRef}>
        <AppSections.SfuelFeatures />
      </Container>
      <Container ref={Team}>
        <AppSections.Team />
      </Container>
      <Container ref={Roadmap}>
        <AppSections.Roadmap />
      </Container>
      <Container ref={ExchangesRef}>
        <AppSections.Exchanges />
      </Container>
      <Container ref={OnlineCommunitiesRef}>
        <AppSections.OnlineCommunities />
      </Container>
      <Container ref={ContactUs}>
        <AppSections.Contact />
      </Container>
      <Container>
        <AppSections.Footer />
      </Container>
      </>
  )
}

export default App
const Container = styled.div`
  width: 100%;
`