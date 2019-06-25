import React from "react";
import ArtistView from "./container/ArtistView";
import './App.css';
import Button from "antd/es/button";

export default function App(props) {

  return (
    <>
      <Button type="primary">Button</Button>
      <ArtistView />
    </>
  );
}
