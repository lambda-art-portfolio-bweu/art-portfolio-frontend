import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import Homepage from './container/HomeView';
import ProfileView from './container/ProfileView';
import PostView from './container/PostView';
import Login from './components/Login';
import Signup from './components/Signup';
import HeaderMenu from './components/HeaderMenu';

const { Content } = Layout;

export default function App() {
  return (
    <StyledLayout className="layout">
      <HeaderMenu />
      <StyledContent>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/:id" exact component={ProfileView} />
          <Route path="/:id/posts/:postId" exact component={PostView} />
        </Switch>
      </StyledContent>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;
const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  padding: 2rem 5vw;
`;
