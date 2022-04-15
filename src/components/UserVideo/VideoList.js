import React from "react";
import { Container } from "react-bootstrap";

import "./video1.css";
import { useSelector } from "react-redux";

import VideoCard from "./VideoCard";
const VideoList = () => {
  const videos = useSelector((state) => state.videos);

  return (
    <div>
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h1>Fondamentaux à voir</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className=" liste">
          {videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
