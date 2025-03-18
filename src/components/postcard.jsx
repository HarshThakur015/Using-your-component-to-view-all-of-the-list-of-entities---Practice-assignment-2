import React, { useState } from "react";
import LikeButton from "./likebutton"; 
import "./postcard.css"; 

function PostCard({ profileImage, username, content, isLiked, onLikeChange }) {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    setLiked(!liked);
    onLikeChange(liked ? -1 : 1); 
  };

  return (
    <div className="post-card">
      <img src={profileImage} alt="profile" className="post-image" /> {/* Profile Image */}
      <div className="post-content">
        <h4>{username}</h4>
        <p>{content}</p>
      </div>
      <LikeButton liked={liked} onClick={handleLike} />
    </div>
  );
}

export default PostCard;
