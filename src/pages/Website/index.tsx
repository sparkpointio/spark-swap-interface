import React from 'react'
import * as AppSections from './components'
import './assets/fonts/quatro/stylesheet.css'
import './components/styles/_style.css'

const Sections = (AppSections as unknown) as { [key: string]: React.FC};
const App = () => {
  return (
    <>
        { 
                Object.keys(Sections).map(function(key ) {
                    const Section = Sections[key] as React.FC
                    return <Section key={key} />
                })
            }
    </>
  )
}

export default App
