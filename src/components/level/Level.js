import React from 'react'
import './level.css'

const Level = ({ icon, text}) => {
  return (
    <div className='ayn__levels-container__level'>
        <div className="ayn__levels-container__level-text">
            <p>{icon}{text}</p>
        </div>
    </div>
  )
}

export default Level