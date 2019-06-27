import React from 'react';
import { Col } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function PostCard(props) {
    return (
      // <Link to={`${props.username}`}>
        <StyledCol span={12}>
          <img src={props.post.pictureUrl} alt="" />
        </StyledCol>
      // </Link>
    );
}

// padding-top value should be a constant set from PostsList
const StyledCol = styled(Col)`
  padding-top: 24px;
`;