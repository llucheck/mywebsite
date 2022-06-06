import React from 'react'
import './workingOn.css'
import chess from '../../assets/chess.png'

const WorkingOn = () => {
  return (
    <div className='workingOn' id='workingOn'>
      <div className='workingOnContent'>
        <h1>
          What am I currently working on?
        </h1>

        <p>
          For starters, I'm working on this website that you're viewing right
          now! I am working on adding content, learning new things I can 
          add to my website, and changing the css and color schemes as I see fit.
        </p>

        <h2>
          Well what else do you plan on working on?
        </h2>

        <p>
          I plan on working more on my android studio app RecipeBox. I
          plan on changing the overall style and coloring, adding images,
          and other cools things that I may come across. I also plan on making
          a chess game in Java. I think it would be a fun and intuitive way
          to show that I can program.
        </p>
        
      </div>
      <div className='workingOnImage'>
          <img src={chess} alt="chess"/>
      </div>
    </div>
  )
}

export default WorkingOn