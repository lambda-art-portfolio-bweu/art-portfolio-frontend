import React from "react";
import './App.css';
import Button from "antd/es/button";
import PostsView from "./container/PostsView";
import ArtistsView from "./container/ArtistsView";

export default function App(props) {

  return (
    <>
      <Button type="primary">Button</Button>
      {/* <ArtistsView /> */}
      <PostsView />
    </>
  );
}
