import React from "react";
import "./App.css";
import PostsView from "./container/PostsView";
import ArtistsView from "./container/ArtistsView";
import { Route } from 'react-router-dom';

export default function App(props) {
  return (
    <>
    <Route path="/" exact component={ArtistsView} />
    <Route path="/posts"  component={PostsView} />
    <Route path="/login"  component={PostsView} />
    <Route path="/signup"  component={PostsView} />
    </>
  );
}
