import React from "react";
import "./ReelsHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoheader">
      <ArrowBackIosIcon />
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
