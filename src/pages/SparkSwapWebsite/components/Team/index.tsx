import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Heading, Button } from '@sparkpointio/sparkswap-uikit'
import TeamData from 'pages/SparkSwapWebsite/config/constants/Teams'
import { TeamsConfig, ITeams } from 'pages/SparkSwapWebsite/config/constants/types'
import { Title } from '../Elements'
import { TeamType } from './types';
import PageSection from '../styles/Layout'
import { breakpoints } from '../styles/Layout/Breakpoints'


const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSubHeading = styled(Text)`
 color: #39BEEC;
 @media screen and (max-width: ${breakpoints.Mobile.l}px) {
  margin-bottom: 30px;
}
`

const StyledImage = styled.img`
  border: solid;
  border-color: #39BEEC;
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

const TeamContainer = ({ name, image, position }: TeamType) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="space-between" style={{ rowGap: '14px' }}>
      <StyledImage src={`${process.env.PUBLIC_URL}/images/Website/Team/${image}.jpg`} />
      <CustomHeading size="lg">{name}</CustomHeading>
      <StyledSubHeading>{position}</StyledSubHeading>
    </Flex>
  );
};

const Team: React.FC = () => {
  const [ active, setActive ] = useState(0)
  const [ teamsList, setTeams ] = useState<ITeams[] | undefined>(TeamData[Object.keys(TeamData).pop() ?? '']);
  return (
    <PageSection direction='column' background='#141C27' padding='4em 0em 8em 0em'>
      <div id="team">
      <Title value="MEET THE TEAM" />
      <div>
        <Button onClick={() => setActive(0)}>ALL</Button>
        {Object.keys(TeamData).map((position, index) => (
            <Button key={position} onClick={() => {
              setActive(index+1)
              setTeams(TeamData[position]);
            }}>{position.toUpperCase()}</Button>
        ))}
      </div>
        {active !== 0 ? (
          <Wrapper>
           {teamsList?.map((item) => (
              <TeamContainer key={item.image} image={item.image} name={item.name} position={item.position}/>
            ))}
          </Wrapper>
        ): (
          Object.keys(TeamData).map((team) => (
            <div key={team} style={{margin: '2rem 0 2rem 0'}}>
              <Heading size='xl'>{team.toUpperCase()}</Heading>
              <Wrapper>
                {TeamData[team].map((member) => (
                   <TeamContainer key={member.image} image={member.image} name={member.name} position={member.position}/>
                ))}
              </Wrapper>
            </div>
          ))
        )}
      </div>
    </PageSection>
  )
}

export default Team
