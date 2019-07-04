import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

export default function GlobalMenu() {
  return (
    <StyledHeader>
      <NavLink to="/">
        <Title style={{ margin: '0px' }}>Art Portfolio</Title>
      </NavLink>
      <div>
        <SNav to="/signup">Signup</SNav>
        <SNav to="/login">Login</SNav>
        <SNav to="/" exact>
          Logout
        </SNav>
        <SNav to="/" exact>
          <Avatar src="http://image.noelshack.com/fichiers/2019/27/2/1562076338-odtlcjxafvqbxhnvxcyx.png" />
        </SNav>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  background-color: #fff;
`;
const SNav = styled(NavLink)`
  display: inline-block;
  padding: 0 1rem;
  &.active {
    border-bottom: #1890ff solid 2px;
  }
`;
