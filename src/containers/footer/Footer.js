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
           <h4>Links</h4>
           <p>Oversons</p>
           <p>Social Media</p>
           <p>Counters</p>
           <p>Contact</p>
        </div>
        <div className="ayn__footer-links_div">
           <h4>Academy</h4>
           <p>Terms & conditions</p>
           <p>Privacy Policy</p>
           <p>Contact</p>
        </div>
      </div>
      <div className="ayn__footer-copyright">
        <p>© 2023 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer