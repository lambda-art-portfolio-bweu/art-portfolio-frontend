import React from 'react';
import { Col } from "antd";
import spacerCol from './PostsList';
import styled from "styled-components";

export default function PostCard(props) {
    return (
      <StyledCol span={12}>
        <img src={props.post.pictureUrl} alt="" />
      </StyledCol>
    );
}

// padding-top value should be a constant set from PostsList
const StyledCol = styled(Col)`
  padding-top: 24px;
`;