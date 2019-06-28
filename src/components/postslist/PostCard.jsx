import React from 'react';
import { Col, Button } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const { post } = props

    return (
      // <Link to={`${props.username}`}>
      <StyledCol span={12}>
        <Button onClick={() => props.deletePost(post.id)}>Delete</Button>
        <p>{post.name}</p>
        <p>{post.heart}</p>
        <p>{post.description}</p>
        <img src={props.post.pictureUrl} alt="" />
      </StyledCol>
      // </Link>
    );
}

// padding-top value should be a constant set from PostsList
const StyledCol = styled(Col)`
  padding-top: 24px;
`;