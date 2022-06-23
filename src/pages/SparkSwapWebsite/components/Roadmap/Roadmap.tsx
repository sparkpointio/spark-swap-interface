import React, { useState } from 'react'
import { Flex, Heading, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Roadmaps as RoadmapList } from 'pages/SparkSwapWebsite/config/constants/Roadmap'
import { RoadmapConfig, Roadmap as IRoadmap } from 'pages/SparkSwapWebsite/config/constants/types'
import PageSection from '../styles/Layout'
import { Title } from '../Elements'
import { NavContainer, NavOption, StyledFlex } from '../Elements/Tab/styled'
import { Card, CardContainer, HeadingGlow, Line, MapList, List, TextList, ItemList } from './styled'

const Wrapper = styled.div<{bg?:string}>`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  ${({bg}) => bg && `
  background-image: url('${bg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  `}
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [roadmapCollection, setRoadmapCollection] = useState(RoadmapList[Object.keys(RoadmapList).pop() ?? ''])

  const renderRoadmap = (actInd:number) => {
    switch(actInd){
      case 1:
      case 2:
      case 3: 
        return (
          <div style={{ marginTop: '6.8rem' }}>
            <Cards>
              {Object.keys(roadmapCollection).map((quarter) => {
                return (
                  <CardContainer>
                    {quarter !== 'Q4' && quarter !== 'recaps' && <Line />}
                    <Card>
                      <HeadingGlow size="xl">{quarter !== 'recaps' && quarter}</HeadingGlow>
                      <MapList>
                        {
                          roadmapCollection[quarter].map((list) => {
                            const indexofColon = list.value.search(':')
                            const value = indexofColon ? list.value.split(':') : '';
                            
                            if (list.items) {
                              return (
                                <List key={list.value}>
                                { 
                                  indexofColon !== -1 ? (
                                    <>
                                    <span style={{fontWeight: 600}}>
                                      {value[0]} 
                                    </span>
                                    <span>
                                      :{value[1]}
                                    </span>
                                    </>
                                  ) : ( 
                                  <span> 
                                    {list.value}
                                  </span>
                                  )
                                }
                                 <ul style={{listStyleType: 'none'}}>
                                {list.items.map((val) => (
                                  <TextList>
                                    {val.value}
                                  </TextList>
                                ))}
                              </ul>
                              </List>
                              )
                            }

                            return (
                            <List key={list.value}>
                              { 
                                indexofColon !== -1 ? (
                                  <>
                                  <span style={{fontWeight: 600}}>
                                    {value[0]} 
                                  </span>
                                  <span>
                                    :{value[1]}
                                  </span>
                                  </>
                                ) : ( 
                                <span> 
                                  {list.value}
                                </span>
                                )
                              }
                            </List>
                          )})
                        }
                      </MapList>
                    </Card>
                  </CardContainer>
                )
              })}
            </Cards>
          </div>
        )
      case 0:
        return (
          Object.keys(RoadmapList).map((year) => (
            <Flex key={year} style={{ margin: '2rem 0 5rem 0' }} flexDirection="column" alignItems="center">
              <Heading size="xl">{year}</Heading>
              <Cards>
                {Object.keys(RoadmapList[year]).map((quarter) => (
                  <CardContainer>
                    {quarter !== 'Q4' && quarter !== 'recaps' && <Line />}
                    <Card>
                      <HeadingGlow size="xl">{quarter !== 'recaps' && quarter}</HeadingGlow>
                      <MapList>
                       { 
                        RoadmapList[year][quarter].map((list) => {
                          const indexofColon = list.value.search(':')
                          const value = indexofColon ? list.value.split(':') : '';
                          
                          if (list.items) {
                            return (
                              <List key={list.value}>
                              { 
                                indexofColon !== -1 ? (
                                  <>
                                  <span style={{fontWeight: 500}}>
                                    {value[0]} 
                                  </span>
                                  <span>
                                    :{value[1]}
                                  </span>
                                  </>
                                ) : ( 
                                <span> 
                                  {list.value}
                                </span>
                                )
                              }
                              <ul style={{listStyleType: 'none'}}>
                                {list.items.map((val) => (
                                  <TextList>
                                    {val.value}
                                  </TextList>
                                ))}
                              </ul>
                            </List>
                            )
                          }
                          
                          return (
                          <List key={list.value}>
                            { 
                              indexofColon !== -1 ? (
                                <>
                                <span style={{fontWeight: 500}}>
                                  {value[0]} 
                                </span>
                                <span>
                                  :{value[1]}
                                </span>
                                </>
                              ) : ( 
                              <span> 
                                {list.value}
                              </span>
                              )
                            }
                          </List>
                        )})
                       }
                      </MapList>
                    </Card>
                  </CardContainer>
                ))}
              </Cards>
            </Flex>
          ))
        )
      default: 
        return (
          <Wrapper>
            <Card>
            <StyledFlex>
            <img src='/SparkSwapLogo.png' alt='app-logo' width='60px'/>
            <Heading size='lg'> More updates coming soon, stay tuned! </Heading>
            </StyledFlex>
            </Card>
          </Wrapper>
        )
    }
  }

  return (
    <PageSection direction="column" id="roadmap" background='#161C26' padding="4em 3em 5em 3em">
      <Title value="Roadmap" />
      <div>
        <NavContainer margin="0rem 0px 2rem 0px" padding="0 0 1rem 0">
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
        { renderRoadmap(activeIndex)}
      </div>
    </PageSection>
  )
}

export default Roadmap
