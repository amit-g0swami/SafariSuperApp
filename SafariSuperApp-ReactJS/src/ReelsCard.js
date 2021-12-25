import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./ReelsCard.css";
import VideoFooter from "./ReelsFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videocard">
      {/* <VideoHeader /> */}
       <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="ig reel video"
      />
     
        <VideoFooter
      className="videoCard__footer"
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
      
    </div>
  );
}

export default VideoCard;
