import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import intro from '../../assets/intro.png';

const Header = () => {
  return (
    <div className='ayn__header section__padding' id='home'>
      <div className="ayn__header-content">
        <h1 className='gradient__text'>
          منصة عين
        </h1>
        <p>تدريبية . تربوية . تعليمية</p>
        <div className="ayn__header-content__input">
          <input type="email" placeholder='أدخل بريدك الشخصي' />
          <button type='button'>إبدأ الآن</button>
        </div>
        <div className="ayn__header-content__people">
          <img src={people} alt="people" />
          <p>١٦٠٠ شخص قاموا بطلب الإشتراك في برامجنا في آخر ٢٤ ساعة.</p>
        </div>
      </div>
      <div className="ayn__header-image">
        <img src={intro} alt="ai" />
      </div>
    </div>
  )
}

export default Header