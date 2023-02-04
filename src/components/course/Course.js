import React from 'react';
import './course.css';

const Course = ({ imgUrl, title }) => {
  return (
    <div className='ayn__courses-container_course'>
      <div className="ayn__courses-container_course-image">
        <img src={imgUrl} alt="course" />
      </div>
      <div className="ayn__courses-container_course-content">
        <div>
          <h3>{title}</h3>
        </div>
        <p>إقرأ تفاصيل أكثر</p>
      </div>
    </div>
  )
}

export default Course