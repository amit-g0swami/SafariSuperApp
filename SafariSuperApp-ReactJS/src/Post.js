import React from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { Avatar } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./Post.css";

function Post({ user, postId, userName, caption, avatarURL, imageURL,location}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={userName} src={avatarURL}>
          {userName?.[0]?.toUpperCase()}
        </Avatar>
        <h3>{userName}</h3> 
        <div className="post__location">
          <LocationOnIcon />
          <h3>{location}</h3>
        </div>
      </div>
      {!imageURL ? (
        <div className="post__noImage">No image</div>
      ) : (
        <img className="post__image" src={imageURL} alt="post" />
      )}

      <h4 className="post__text">
        <strong>{userName}</strong>
        {caption}
      </h4>
      <Comments {...{ postId }} />
      {user?.displayName && <AddComment {...{ user, postId }} />}
    </div>
  );
}

export default Post;
