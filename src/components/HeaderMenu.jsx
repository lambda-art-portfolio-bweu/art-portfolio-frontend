import React from 'react';
import styled from 'styled-components';
import { Layout, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

export default function GlobalMenu(props) {
  console.log(props);
  return (
    <StyledHeader>
      <NavLink to="/">
        <Title style={{ margin: '0px' }}>Art Portfolio</Title>
      </NavLink>
      <div>
        <SNav to="/signup">Signup</SNav>
        <SNav to="/login">Login</SNav>
        <LogoutBtn onClick={() => props.history.push('/')}>Logout</LogoutBtn>
        <AvatarNav to="/here" exact>
          <Avatar src="http://image.noelshack.com/fichiers/2019/27/2/1562076338-odtlcjxafvqbxhnvxcyx.png" />
        </AvatarNav>
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
  color: #2a2a2a;
  &.active {
    border-bottom: #1890ff solid 2px;
    color: #1890ff;
  }
`;
const AvatarNav = styled(SNav)`
  &.active {
    border-bottom: none;
    margin: 0 1rem;
    padding: 5px;
    border: #1890ff solid 2px;
    border-radius: 50%;
    line-height: 0;
  }
`;
const LogoutBtn = styled.span`
  color: #2a2a2a;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
