import React, { useState } from 'react';
import "./post.scss";
import {MdMoreHoriz} from "react-icons/md";
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import {MdOutlineTextsms} from "react-icons/md";
import {BiShareAlt} from "react-icons/bi";
import Comments from '../comments/Comments';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen]= useState(false)
    //Temporary
    const liked = true;
  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                        <span className='name'>{post.name}</span>
                        <span className='date'>1 min ago</span>
                    </Link>
                </div>
            </div>
            <MdMoreHoriz/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={"./upload/" + post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {liked ?  <AiFillHeart/>: <AiOutlineHeart/>}
                12 likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <MdOutlineTextsms/>
                12 comments
            </div>
            <div className="item">
                <BiShareAlt/>
                share
            </div>
        </div>
        {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post