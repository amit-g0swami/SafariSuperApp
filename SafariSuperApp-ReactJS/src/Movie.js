import React from "react";
import YoutubeSidebar from "./YoutubeSidebar";
import RecommendedVideos from "./RecommendedVideos";
import './Movie.css';

function Movie() {
  return (
    <div className="videos">
      <YoutubeSidebar />
      <RecommendedVideos />
    </div>
  );
}

export default Movie;
