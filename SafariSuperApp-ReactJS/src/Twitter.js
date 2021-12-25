import React from "react";
import TwitterSidebar from "./TwitterSidebar";
import TwitterFeed from "./TwitterFeed";
import Widgets from "./Widgets";
import "./Twitter.css";

function Twitter() {
  return (
    // BEM
    <div className="twitterapp">
      <TwitterSidebar />
      <TwitterFeed />
      <Widgets />
    </div>
  );
}

export default Twitter;