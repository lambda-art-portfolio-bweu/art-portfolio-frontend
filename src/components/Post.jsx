import React from "react";

export default function Post(props) {
  return (
    <div>
      <p>{props.post.id}</p>
      <p>{props.post.title}</p>
      <p>{props.post.description}</p>
      { props.post.categories.map(cat => 
          <span>{cat}</span>
      )}
      <img src={props.post.pictureUrl} alt="" />
    </div>
  );
}
