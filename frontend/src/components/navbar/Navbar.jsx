import React, { useContext } from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom'
import {AiOutlineHome} from "react-icons/ai";
import {FiMoon} from "react-icons/fi";
import {BiGridAlt} from "react-icons/bi";
import {BiSearchAlt2} from "react-icons/bi";
import {IoPersonOutline} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {BiSun} from "react-icons/bi";
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
    
  const {toggle, darkMode} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
            <span>GoSocial</span>
            </Link>
            <AiOutlineHome/>
           {darkMode ?  <BiSun onClick={toggle} /> : <FiMoon onClick={toggle} />}
            <BiGridAlt/>
            <div className="search">
                <BiSearchAlt2/>
                <input type="text" placeholder='search' />
            </div>
        </div>
        <div className="right">
            <IoPersonOutline/>
            <HiOutlineMail/>
            <IoIosNotificationsOutline/>
            <div className="user">
                <img src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Komal</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar