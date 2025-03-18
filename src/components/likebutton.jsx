import React, { useState } from "react";

function LikeButton({ isLiked, onLikeChange }) {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    onLikeChange(newLikedState ? 1 : -1); // Pass +1 if liked, -1 if unliked
  };

  return (
    <button onClick={toggleLike} className="like-button">
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;
