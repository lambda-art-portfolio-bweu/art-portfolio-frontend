import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Layout, Row, Col, Typography, Badge, Tag, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function SinglePost(props) {

  const handleHeart = () => {
    let heartCount = props.post.heart + 1;
    props.updatePost(props.post.id, { heart: heartCount });
  };

  return (
    <StyledContent>
      <Row type="flex" justify="center">
        <Col>
          <StyledImageDiv>
            <StyledImg src={props.post.pictureUrl} alt="" />
          </StyledImageDiv>
        </Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col>
          <StyledH1>{props.post.title}</StyledH1>
        </Col>
        <StyledCenterCol style={{ marginRight: 20 }}>
          <Badge
            count={props.post.heart}
            style={{ backgroundColor: "#108ee9" }}
          >
            <Icon
              type="heart"
              theme="twoTone"
              twoToneColor="hsla(0, 83%, 45%, 1)"
              style={{ fontSize: "2rem", padding: "0.1rem" }}
              onClick={handleHeart}
            />
          </Badge>
          <Button onClick={() => props.deletePost(props.post.id)}>
            Delete
          </Button>
        </StyledCenterCol>
      </Row>

      <Row type="flex" justify="start">
        <Col>
          <Link to={`/${props.post.artist_id}`} >
            <StyledH3 level={3} style={{ marginRight: 20 }}>
              {props.artistName}
            </StyledH3>
          </Link>
        </Col>
        <StyledCenterCol>
          {/* {categories.map(cat => (
            <Tag>{cat}</Tag>
          ))} */}
        </StyledCenterCol>
      </Row>

      <Row type="flex" justify="center">
        <Col>
          <Paragraph>{props.post.description}</Paragraph>
        </Col>
      </Row>
    </StyledContent>
  );
}

const StyledImg = styled.img`
  width: 100%;
`;
const StyledImageDiv = styled.div`
  width: 960px;
  padding-top: 2rem;
`;
const StyledCenterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledH1 = styled(Title)`
  &.ant-typography {
    margin: 0.5rem 0;
  }
`;
const StyledH3 = styled(Title)`
  &.ant-typography {
    margin: 0.2rem 0;
  }
`;
const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
`;
