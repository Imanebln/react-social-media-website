import React, { useContext, useEffect, useState } from 'react'
import './rightbar.css';
import Online from '../online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Users} from '../../Data.js'

function Rightbar({user}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings?.includes(user?.id));

  useEffect(() => {
    setFollowed(currentUser.followings?.includes(user?._id))
  }, [currentUser, user?._id])


  useEffect(() => {
    const getFriends = async () => {
      try{
        const friendList = await axios.get(`/users/friends/${currentUser._id}`);
        setFriends(friendList?.data);
        console.log(friends);
      }catch(err){
        console.log(err);
      }
    };
    getFriends();
  },[user]);

  const handleFollow = async () => {
    try{
      if(followed){
        await axios.put("/users/" + user._id + "/unfollow",
        {userId: currentUser._id});
        dispatch({type: "UNFOLLOW", payload: user._id});
        
      }else{
  
        await axios.put("/users/" + user._id + "/follow", 
        {userId: currentUser._id});
        dispatch({type: "FOLLOW", payload: user._id});
      }
      setFollowed(!followed);
    }catch(err){
      console.log(err);
    }
  };

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src={publicFolder+"gift.png"} alt="" />
          <span className="birthdayText"><b>Someone and 3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd'  src={publicFolder+"ad.png"} alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* 1st online friend  */}
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightBar = () => {
    return(
      <>
      {user?.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleFollow}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <RemoveIcon />: <AddIcon /> }
        </button>
      )}
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">
            {user.relationship === 1 ? "Single"
            : user.relationship === 2 ? "Married" 
            : "-" }
          </span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">

        { user?.username === currentUser.username && friends.map((friend) => (

        <Link to={`/profile/${friend.username}`}
        style={{ textDecoration: "none" }} key={friend._id} > 
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' 
            src={
            friend.profilePicture 
            ? publicFolder + friend.profilePicture 
            : publicFolder + "person/noAvatar.png"
            }
            alt="" 
          />
          <span className="tightbarFollowingName">{friend.username}</span>
        </div>
        </Link> 
        ))}
        
      </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar