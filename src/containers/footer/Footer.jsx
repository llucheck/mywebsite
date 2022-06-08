import React from 'react'
import './footer.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#workingOn">Working On</a></p>
  </>
)

const Footer = () => {
  return (
    <div className='footer sectionPadding'>

      <div className='footerContentHeader'>
        <h1>
          Welcome to the bottom of the page
        </h1>
      </div>

      <div className='footerContentLinks'>
        <Menu />
      </div>

    </div>
  )
}

export default Footer