import React, { useContext } from 'react'
import './profile.scss'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from 'react-icons/bs'
import { IoLocation } from 'react-icons/io5'
import { MdLanguage } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMoreVertical } from 'react-icons/fi'
import Posts from '../../components/posts/Posts'
import { useQuery } from 'react-query'
import { QueryClient, useMutation } from 'react-query'
import { makeRequest } from '../../axios.js'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  const userId = parseInt(useLocation().pathname.split('/')[2])

  const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get('/users/find/' + userId).then((res) => {
      return res.data
    }),
  )

  // const {data: relationshipData } = useQuery(['relationship'], () =>
  // makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
  //   return res.data;
  //   }),
  // )

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  // console.log(relationshipData);
  // // console.log(typeof userId)

  const queryClient = new QueryClient()

  const mutation = useMutation(
    (following) => {
     if(following) return makeRequest.delete('/relationships?userId='+ userId);
     return makeRequest.post("/relationships", {userId})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"])
      },
    },
  )

const handleFollow =() => {
  mutation.mutate(relationshipData.includes(currentUser.id));
}

  return (
    <div className="profile">
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className="images">
            <img src={data.coverPic} alt="" className="cover" />
            <img src={data.profilePic} alt="" className="profilePic" />
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
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <IoLocation />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <MdLanguage />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? "loading" : userId === currentUser.id ? (
                  <button>update</button>
                ) : (
                  <button onClick={handleFollow}>{
                    relationshipData.includes(currentUser.id) ? "Following" : "Follow"
                  }</button>
                )}
              </div>
              <div className="right">
                <HiOutlineMail />
                <FiMoreVertical />
              </div>
            </div>
            <Posts userId={userId}/>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
