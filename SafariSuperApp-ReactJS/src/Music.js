import React from "react";
import "./Music.css";
import MusicSidebar from "./MusicSidebar";
import RecommendedMusic from "./RecommendedMusic";
import Playersetup from "./Playersetup";
function Music() {
    return (
		<div className="player">
	<MusicSidebar />
      <RecommendedMusic />
      <Playersetup />
	  </div>
    )
}

export default Music
