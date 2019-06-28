import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

export default function GlobalMenu() {
    return (
      <StyledHeader
        style={{
          zIndex: 1,
          width: "100%",
          backgroundColor: "#fff"
        }}
      >
        <NavLink to="/">
          <Title style={{ margin: "0px" }}>Art Portfolio</Title>
        </NavLink>
        <Menu mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="3">
            <NavLink to="/signup">Signup</NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/">Logout</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/signup">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </NavLink>
          </Menu.Item>
        </Menu>
      </StyledHeader>
    );
}

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items:center;
`
