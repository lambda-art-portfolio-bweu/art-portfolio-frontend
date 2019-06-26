import React from "react";
import './App.css';
// import PostsView from "./container/PostsView";
// import ArtistsView from "./container/ArtistsView";
import ProfileView from "./container/ProfileView";
import SinglePostView from "./container/SinglePostView";

export default function App(props) {

  return (
    <>
      <SinglePostView />
      <ProfileView />
      {/* <ArtistsView /> */}
      {/* <PostsView /> */}
    </>
  );
}
