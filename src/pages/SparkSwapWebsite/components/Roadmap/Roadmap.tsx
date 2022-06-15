import React, { useState } from 'react'
import { Flex, Heading } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Roadmaps as RoadmapList } from 'pages/SparkSwapWebsite/config/constants/Roadmap'
import { RoadmapConfig, Roadmap as IRoadmap } from 'pages/SparkSwapWebsite/config/constants/types'
import PageSection from '../styles/Layout'
import { Title } from '../Elements'
import { NavContainer, NavOption } from '../Elements/Tab/styled'
import { Card, CardContainer, HeadingGlow, Line, MapList, List, TextList } from './styled'

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cards = styled(Flex)`
  margin: 2rem 0 0 0;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  justify-content: center;
  align-items: baseline;
  position: relative;
  @media (max-width: 1280px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

const Roadmap: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(Object.keys(RoadmapList).length)
  const [roadmapCollection, setRoadmapCollection] = useState(RoadmapList[Object.keys(RoadmapList).pop() ?? ''])
  return (
    <PageSection direction="column" id="roadmap" padding="8em 3em 5em 3em">
      <Title value="Roadmap" />
      <div>
        <NavContainer margin="0.5rem 0px 2rem 0px" padding="0 0 1rem 0">
          <NavOption activeIndex={activeIndex === 0} onClick={() => setActiveIndex(0)}>
            ALL
          </NavOption>
          {Object.keys(RoadmapList).map((year, ind) => (
            <NavOption
              key={year}
              activeIndex={activeIndex === ind + 1}
              onClick={() => {
                setActiveIndex(ind + 1)
                setRoadmapCollection(RoadmapList[year])
              }}
            >
              {year}
            </NavOption>
          ))}
        </NavContainer>
        {activeIndex !== 0 ? (
          <div style={{marginTop: '6.8rem'}}>
          <Cards>
            {Object.keys(roadmapCollection).map((quarter) => {
              return (
                <CardContainer>
                  {quarter !== 'Q4' && <Line />}
                  <Card>
                    <HeadingGlow size="xl">{quarter}</HeadingGlow>
                    <MapList>
                      {Object.keys(roadmapCollection[quarter]).map((month) => {
                        return (
                          <List>
                            {month}
                            <ul style={{ listStyleType: 'none' }}>
                              {roadmapCollection[quarter][month].map((list) => (
                                <TextList>{list.value}</TextList>
                              ))}
                            </ul>
                          </List>
                        )
                      })}
                    </MapList>
                  </Card>
                </CardContainer>
              )
            })}
          </Cards>
          </div>
        ) : (
          Object.keys(RoadmapList).map((year) => (
            <Flex key={year} style={{ margin: '2rem 0 5rem 0' }} flexDirection="column" alignItems="center">
              <Heading size="xl">{year}</Heading>
              <Cards>
                {Object.keys(RoadmapList[year]).map((quarter) => (
                  <CardContainer>
                    {quarter !== 'Q4' && <Line />}
                    <Card>
                      <HeadingGlow size="xl">{quarter}</HeadingGlow>
                      <MapList>
                        {Object.keys(RoadmapList[year][quarter]).map((month) => (
                          <List>
                            {month}
                            <ul style={{ listStyleType: 'none' }}>
                              { RoadmapList[year][quarter][month].map((target) => (
                                 <TextList>
                                  {target.value}
                                 </TextList>
                              ))}
                            </ul>
                          </List>
                        ))}
                      </MapList>
                    </Card>
                  </CardContainer>
                ))}
              </Cards>
            </Flex>
          ))
        )}
      </div>
    </PageSection>
  )
}

export default Roadmap
