import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import resizeObserver from "../../hooks/ResizeObserver";
import "./Video.scss";
const Video = ({ clip }) => {
  const video = useRef();

  return (
    <div ref={video} className="video-player">
      <ReactPlayer
        width={window.innerWidth > 500 ? "70vw" : "80vw"}
        height={window.innerWidth > 500 ? "70vh" : "40vh"}
        controls={true}
        url={clip}
      />
    </div>
  );
};

export default Video;
