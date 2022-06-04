import React from 'react'

import { Footer, Header } from './containers'
import { Navbar, Projects, WorkingOn } from './components'
import './app.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradientBg">
        <Navbar />
        <Header />
      </div>
      <Projects />
      <WorkingOn />
      <Footer />
    </div>
  )
}

export default App