import React from "react";
import PostsView from "./container/PostsView";
import ArtistsView from "./container/ArtistsView";
import ProfileView from "./container/ProfileView";
import SinglePostView from "./container/SinglePostView";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import GlobalMenu from "./components/GlobalMenu";

export default function App(props) {
  return (
      <StyledLayout className="layout">
        <GlobalMenu/>
        <Route path="/" exact component={ArtistsView} />
        <Route path="/posts" component={PostsView} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={PostsView} /> */}
        <Route path="/:username/posts/:id" component={SinglePostView} />
        <Route path="/:username" component={ProfileView} />
      </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;
