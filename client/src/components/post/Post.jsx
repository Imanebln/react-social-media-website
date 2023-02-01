import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from 'timeago.js';

function Post({post}) {

    const [like, setLike] = useState(post.likes.length);
    const [isLiked,  setIsLiked] = useState(false);

    const [user,  setUser] = useState({});


    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`users/?userId=${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user.profilePicture || `${publicFolder}person/noAvatar.png`} alt="" />
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img className='postImg' src={publicFolder+post.img} alt="" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter"> {like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post