import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">الرئيسية</a></p>
    <p><a href="#whatayn">من نحن؟</a></p>
    <p><a href="#features">المميزات</a></p>
    <p><a href="#possibility">الفرص</a></p>
    <p><a href="#courses">الدروس</a></p>
    <p><a href="#levels">عن الدورة</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ayn__navbar">
      <div className="ayn__navbar-links">
        <div className="ayn__navbar-links_logo">
          <img src= {logo} alt='logo' />
        </div>
        <div className="ayn__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ayn__navbar-sign">
        <p>دخول</p>
        <button type="button">تسجيل</button>
      </div>
      <div className="ayn__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick= { ()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick= { ()=> setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="ayn__navbar-menu_container scale-up-center">
            <div className="ayn__navbar-menu_container-links">
              <Menu />
              <div className="ayn__navbar-menu_container-links-sign">
                <p>دخول</p>
                <button type="button">تسجيل</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar