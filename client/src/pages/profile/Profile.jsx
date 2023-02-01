import './profile.css';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

function Profile() {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img className='profileCoverImg' src={`${publicFolder}post/3.jpeg`} alt="" />
                <img className='profileUserImg' src={`${publicFolder}person/7.jpeg`} alt="" />
            </div>

            <div className="profileInfo">
                <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                <span className='profileInfoDesc'>Hello I'm a devoloper</span>
            </div>
        </div>

        <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}

export default Profile