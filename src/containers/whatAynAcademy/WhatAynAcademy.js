import React from 'react'
import { Feature } from '../../components'
import './whatAynAcademy.css'

const WhatAynAcademy = () => {
  return (
    <div className='ayn__whataynacademy section__margin' id='whatayn'>
      <div className="ayn__whataynacademy-feature">
        <Feature />
      </div>
      <div className="ayn_whataynacademy-heading">
        <h1 className='gradient-text'>
          فرص التطور والتعلم معنا أكبر مما تتخيل
        </h1>
        <p>تصفح المكتبة</p>
      </div>
      <div className="ayn__whataynacademy-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatAynAcademy