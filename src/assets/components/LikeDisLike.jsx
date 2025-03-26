import React from 'react'
import { useState } from "react";

const LikeDisLike = () => {
    const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
    <div>
        {/* Botones de Like y Dislike */}
      <div>
        <button
          onClick={() => setLikes(likes + 1)}
          className="m-2 p-2 bg-green-500 text-white rounded"
        >
          Like ({likes})
        </button>
        <button
          onClick={() => setDislikes(dislikes + 1)}
          className="m-2 p-2 bg-red-500 text-white rounded"
        >
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  )
}

export default LikeDisLike;