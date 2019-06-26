import React from 'react';
import { Col } from "antd";
import spacerCol from './PostsList';
import styled from "styled-components";

export default function PostCard(props) {
    return (
      <StyledRow span={12}>
        <img src={props.post.pictureUrl} alt="" />
      </StyledRow>
    );
}

const StyledRow = styled(Col)`
  margin-bottom: ${spacerCol};
`;