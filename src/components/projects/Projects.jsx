import React from 'react'
import './projects.css'
import { tron, recipebox, support } from './imports.js'

const Projects = () => {
  return (
    <div className='projects' id="projects">
      <div className='projectsContent'>
        <h1>
          What have I done so far?
        </h1>

        <p>
          So far I've worked on a variety of projects, including an 
          Android studio application using Java and XML, a python based
          video game using an open source graphics library that mimics
          the famous arcade game Tron, and a React based website using 
          Okta Auth that can be used as a support ticket help desk.
        </p>

        <div className='projectImages'>
          <div>
            <a href="https://github.com/llucheck/androidStudioProjects/tree/master/mad-final-project-llucheck/RecipeBox">
              <img src={recipebox} alt="RecipeBox" />
            </a>
          </div>
          <div>
            <a href="https://github.com/llucheck/TronRacerGame">
              <img src={tron} alt="TronGame" />
            </a>
          </div>
          <div>
            <a href="https://github.com/llucheck/support-ticket-master">
              <img src={support} alt="SupportTicketMaster" />
            </a>
          </div>
        </div>
        

        <p className='currentProjects'>
          You can look at these projects by clicking the images above.
          You can also see all of my projects current and old by clicking
          HERE!
        </p>

      </div>
    </div>
  )
}

export default Projects