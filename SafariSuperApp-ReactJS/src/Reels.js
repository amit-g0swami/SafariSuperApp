import React, { useState, useEffect } from "react";
import "./Reels.css";
import VideoCard from "./ReelsCard";
import ReelUploader from "./ReelUploader";
import { db } from "./firebase";

function Reels() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
      <div className="Posts">
        {reels.map(({ url, likes, shares, channel, avatarSrc, song }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* <VideoCard />
        <VideoCard /> */}
      <ReelUploader />
    </div>
  );
}

export default Reels;