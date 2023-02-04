import React from 'react'
import './courses.css'
import { Course } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports'

const Courses = () => {
  return (
    <div className='ayn__courses section__padding' id='courses'>
      <div className="ayn__courses-heading">
        <h1 className="gradient__text">
          أكاديمية عين هي العنوان،
          هناك الكثير من دورات العلم والمعرفة.
        </h1>
      </div>
      <div className="ayn__courses-container">
        <div className="ayn__courses-container_groupA">
          <Course imgUrl={blog01} title="مهارات أساسية" />
        </div>
        <div className="ayn__courses-container_groupB">
          <Course imgUrl={blog02} title="مهارات أساسية" />
          <Course imgUrl={blog03} title="مهارات أساسية" />
          <Course imgUrl={blog04} title="مهارات أساسية" />
          <Course imgUrl={blog05} title="مهارات أساسية" />
        </div>
      </div>
    </div>
  )
}

export default Courses