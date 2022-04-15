import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./video1.css";

const VideoCard = ({ video }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div className="question">
        <div className="info">
          <figure class="movie">
            <div class="movie__hero">
              <img src={video.image} alt="" class="movie__img" />
            </div>
            <div class="movie__content">
              <div class="movie__title">
                <h3 class="heading__primary">{video.title}</h3>
              </div>
            </div>
          </figure>

          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showInfo && (
          <p>
            <video width="750" height="500" controls poster={video.image}>
              <source src={video.source} type="video/mp4" />
            </video>
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
