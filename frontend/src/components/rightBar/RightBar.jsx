import React from 'react';
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggetions For You</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Komal</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar