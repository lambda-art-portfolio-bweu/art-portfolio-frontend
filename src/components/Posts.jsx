import React from "react";
import Post from "./Post";

export default function Posts(props) {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
