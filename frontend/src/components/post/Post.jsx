import React, { useContext, useState } from 'react';
import "./post.scss";
import {MdMoreHoriz} from "react-icons/md";
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import {MdOutlineTextsms} from "react-icons/md";
import {BiShareAlt} from "react-icons/bi";
import Comments from '../comments/Comments';
import moment from "moment"
import {  useQuery } from 'react-query';
import { makeRequest } from '../../axios.js';
import { AuthContext } from '../../context/authContext';
import { QueryClient, useMutation } from 'react-query'

const Post = ({post}) => {
    const [commentOpen, setCommentOpen]= useState(false);

    const {currentUser} = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId="+post.id).then((res) => {
      return res.data;
    })
  );
 console.log(data);

const queryClient = new QueryClient()

  const mutation = useMutation(
    (liked) => {
     if(liked) return makeRequest.delete('/likes?postId='+post.id);
     return makeRequest.post("/likes", {postId: post.id})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('likes')
      },
    },
  )

const handleLike =() => {
    mutation.mutate(data.includes(currentUser.id))
}
  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                        <span className='name'>{post.name}</span>
                        <span className='date'>{moment(post.createdAt).fromNow()}</span>
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
                {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
                <AiFillHeart
                  style={{ color: "red" }}
                  onClick={handleLike}
                />
              ) : (
              <AiOutlineHeart
               onClick={handleLike}
             />
            )}
            {data?.length} Likes
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
        {commentOpen && <Comments postId={post.id}/>}
        </div>
    </div>
  )
}

export default Post