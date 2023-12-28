import React from 'react'
import '../Styles/Sidebar.css';
import logo from '../assets/Logo_image.webp';
import { LuUser2 } from "react-icons/lu";
import { LuBookMinus } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";




const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <img src={logo} alt='logo_default' className='logo__image'/>
        <LuUser2 style={{alignItems: 'center',marginLeft: '40px',height: '60px',width: '30px'}}/>
        <p className='logo__text'>students</p>
        <LuBookMinus style={{alignItems: 'center',marginLeft: '40px',height: '60px',width: '30px'}} />
        <p className='logo__text'>Lesson Plan</p>
        <CiSettings style={{alignItems: 'center',marginLeft: '40px',height: '60px',width: '30px'}} />
        <p className='logo__text'>Setting</p>
      </div>
    </>
  )
}

export default Sidebar