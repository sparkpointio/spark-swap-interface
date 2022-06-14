import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Heading, Button, Link } from '@sparkpointio/sparkswap-uikit'
import TeamData from 'pages/SparkSwapWebsite/config/constants/Teams'
import { ITeams } from 'pages/SparkSwapWebsite/config/constants/types'
import { NavOption, NavContainer } from '../Elements/Tab/styled'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import { breakpoints } from '../styles/Layout/Breakpoints'

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSubHeading = styled(Text)`
  color: #39beec;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    margin-bottom: 30px;
  }
`

const StyledImage = styled.img`
  border: solid;
  border-color: #39beec;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 10px;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    width: 250px;
    height: 250px;
    margin: auto;
  }
  margin: 8px;
`

const CustomHeading = styled(Heading)`
  font-family: 'Quatro';
  font-weight: bold;
`

const TeamContainer = ({ name, image, position, linkedinlink }: ITeams) => {
  return (
    <Link href={`https://www.linkedin.com/in/${linkedinlink}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between" style={{ rowGap: '14px' }}>
        <StyledImage src={`${process.env.PUBLIC_URL}/images/Website/Team/${image}.jpg`} />
        <CustomHeading size="lg">{name}</CustomHeading>
        <StyledSubHeading>{position}</StyledSubHeading>
      </Flex>
    </Link>
  )
}

const Team: React.FC = () => {
  const [active, setActive] = useState(0)
  const [teamsList, setTeams] = useState<ITeams[]>(TeamData[Object.keys(TeamData).pop() ?? ''])
  return (
    <PageSection direction="column" background="#141C27" padding="4em 0em 8em 0em">
      <div id="team">
        <Title value="MEET THE TEAM" />
        <div style={{ padding: '0 5rem 0 5rem' }}>
          <NavContainer margin="2.5rem 0px 2rem 0px" padding="0 0 1rem 0">
            <NavOption activeIndex={active === 0} onClick={() => setActive(0)}>
              ALL
            </NavOption>
            {Object.keys(TeamData).map((position, index) => (
              <NavOption
                key={position}
                onClick={() => {
                  setActive(index + 1)
                  setTeams(TeamData[position])
                }}
                activeIndex={active === index + 1}
              >
                {position.toUpperCase()}
              </NavOption>
            ))}
          </NavContainer>
          {active !== 0 ? (
            <Wrapper style={{ marginTop: '6.83rem' }}>
              {teamsList?.map((item) => (
                <TeamContainer 
                  key={item.image} 
                  image={item.image} 
                  name={item.name} 
                  position={item.position} 
                  linkedinlink={item.linkedinlink}
                />
              ))}
            </Wrapper>
          ) : (
            Object.keys(TeamData).map((team) => (
              <Flex key={team} style={{ margin: '2rem 0 5rem 0' }} flexDirection='column' alignItems='center'>
                <Heading size="xl">{team.toUpperCase()}</Heading>
                <Wrapper style={{ marginTop: '2rem' }}>
                  {TeamData[team].map((member) => (
                    <TeamContainer
                      key={member.image}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedinlink={member.linkedinlink}
                    />
                  ))}
                </Wrapper>
              </Flex>
            ))
          )}
        </div>
      </div>
    </PageSection>
  )
}

export default Team
