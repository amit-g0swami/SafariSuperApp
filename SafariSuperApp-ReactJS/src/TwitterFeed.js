import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import TwitterPost from "./TwitterPost";
import "./TwitterFeed.css";
import {db} from "./firebase";
import FlipMove from "react-flip-move";

function TwitterFeed() {
  const [twitterposts, setTwitterPosts] = useState([]);

  useEffect(() => {
    db.collection("twitterposts").onSnapshot((snapshot) =>
    setTwitterPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {twitterposts.map((twitterpost) => (
          <TwitterPost
            key={twitterpost.text}
            displayName={twitterpost.displayName}
            username={twitterpost.username}
            verified={twitterpost.verified}
            text={twitterpost.text}
            avatar={twitterpost.avatar}
            image={twitterpost.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default TwitterFeed;