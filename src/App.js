import React from "react";
import './App.css';
import Button from "antd/es/button";
import PostView from "./container/PostView";
import ArtistView from "./container/ArtistView";

export default function App(props) {

  return (
    <>
      <Button type="primary">Button</Button>
      {/* <ArtistView /> */}
      <PostView />
    </>
  );
}
