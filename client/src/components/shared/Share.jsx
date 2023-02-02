import React, { useContext, useRef } from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import {AuthContext} from '../../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

function Share() {

  const {user} = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      UserId: user._id,
      desc: desc.current.value
    }

    try{
      await axios.post("/posts", newPost)
    }catch(err){

    }
  }

  return (
    <div className='shareContainer'>
     <div className="shareWrapper">
      <div className="shareTop">
        <img className='shareProfileImg' 
          src={user.profilePicture 
          ? publicFolder+user.profilePicture 
          : publicFolder+"person/noAvatar.png" } alt="" />
        <input placeholder={`What's in your mind ${user.username}?`} 
          className="shareInput"
          ref={desc}
         />
      </div>
      <hr className="shareHr" />
      <form className="shareBottom" onSubmit={handleSubmit}>
        <label htmlFor='file' className="shareOptions">
          <div className="shareOption">
            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
            <span className='shareOptionText'>Photo or video</span>
            <input style={{display:'none'}} type="file" id="file" accept='.png, .jpeg, .jpg' onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="shareOption">
            <LabelIcon htmlColor='blue' className='shareIcon' />
            <span className='shareOptionText'>Tag</span>
          </div>
          <div className="shareOption">
            <RoomIcon htmlColor='green' className='shareIcon' />
            <span className='shareOptionText'>Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
            <span className='shareOptionText'>Feelings</span>
          </div>
        </label>
        <button className='shareButton' type='submit'>Share</button>
      </form>
     </div>
    </div>
  )
}

export default Share