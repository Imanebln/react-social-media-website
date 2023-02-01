import React, { useState } from 'react'
import './feed.css';
import Share from '../shared/Share';
import Post from '../post/Post';
import { useEffect } from 'react';
import axios from 'axios';


function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/63d97dfaf3104cc5ae3b1352");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);


  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        { posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed