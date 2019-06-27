import React from "react";
import Homepage from "./container/Homepage";
import ProfileView from "./container/ProfileView";
import SinglePostView from "./container/SinglePostView";
import Login from "./components/Login";
import Signup from './components/Signup';
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import GlobalMenu from "./components/GlobalMenu";

export default function App() {
  return (
    <StyledLayout className="layout">
      <GlobalMenu />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/:username" exact component={ProfileView} />
        <Route path="/:username/posts/:id" exact component={SinglePostView} />
      </Switch>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;
