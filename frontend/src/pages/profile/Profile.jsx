import React from 'react'
import './profile.scss'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from 'react-icons/bs';
import {IoLocation} from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {FiMoreVertical} from 'react-icons/fi';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <BsFacebook fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <BsInstagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <BsTwitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <BsLinkedin fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <BsPinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Komal Killedar</span>
            <div className="info">
            <div className="item">
              <IoLocation/>
              <span>Pune</span>
            </div>
            <div className="item">
              <MdLanguage />
              <span>go-social.dev</span>
            </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <HiOutlineMail/>
            <FiMoreVertical/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile
