import React from 'react';
import './closeFriend.css';

function CloseFriend({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
        <li className="sidebarFriend">
            <img src={publicFolder+user.profilePicture} alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriend