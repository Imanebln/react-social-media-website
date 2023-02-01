import React from 'react'
import './rightbar.css';
import {Users} from '../../Data.js';
import Online from '../online/Online';

function Rightbar({profile}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Someone and 3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd'  src="/assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* 1st online friend  */}
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightBar = () => {
    return(
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${publicFolder}person/6.jpeg`} alt="" />
          <span className="tightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${publicFolder}person/4.jpeg`} alt="" />
          <span className="tightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${publicFolder}person/3.jpeg`} alt="" />
          <span className="tightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${publicFolder}person/1.jpeg`} alt="" />
          <span className="tightbarFollowingName">John Carter</span>
        </div>
      </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar