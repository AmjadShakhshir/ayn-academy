import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='ayn__footer section__padding'>
      <div className="ayn__footer-heading">
        <h1 className="gradient__text">اكتشاف كيفية التوقع والتكيف مع أحدث الاتجاهات والرقمية</h1>
      </div>
      <div className="ayn__footer-btn">
        <p>قدم طلبك الآن</p>
      </div>
      <div className="ayn__footer-links">
        <div className="ayn__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
        </div>
        <div className="ayn__footer-links_div">
          <h4>الروابط</h4>
          <p>المراحل</p>
          <p>سوشيال ميديا</p>
          <p>اتصل بنا</p>
        </div>
        <div className="ayn__footer-links_div">
          <h4>الأكاديمية</h4>
          <p>القيود والشروط</p>
          <p>الخصوصية</p>
          <p>الإتصال</p>
        </div>
      </div>
      <div className="ayn__footer-copyright">
        <p>© 2023 Ayn. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer