import React, { useContext, useRef, useState } from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CancelIcon from '@mui/icons-material/Cancel';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import { instance } from '../../api-calls';

function Share() {

  const {user} = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;
      console.log(newPost);
      console.log(file);
      for(const [key, value] of data){
        console.log(key, value);
      }
      console.log(data);
      
      try{
        await axios.post("/upload", data).then(res => console.log(res));
      }catch(err){
        console.log(err);
      }
    }
    try{
      await axios.post("/posts", newPost)
      window.location.reload();
    }catch(error){
      console.log(error)
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
      {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
      <form className="shareBottom" onSubmit={handleSubmit}>
        <label htmlFor='file' className="shareOptions">
          <div className="shareOption">
            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
            <span className='shareOptionText'>Photo or video</span>

            <input 
            style={{display:'none'}} 
            type="file" 
            id="file" 
            accept=".png, .jpeg, .jpg"
            onChange={(e) => setFile(e.target.files[0])} />

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