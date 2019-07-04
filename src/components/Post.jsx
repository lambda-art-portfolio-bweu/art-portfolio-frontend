import React from "react";
import styled from "styled-components";
import { Layout, Row, Col, Typography, Badge, Tag, Icon, Button, Modal } from "antd";
import { Link } from "react-router-dom";

import camera from "../assets/camera.svg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { confirm } = Modal;

export default function Post(props) {

  const handleHeart = () => {
    let heartCount = props.post.heart + 1;
    props.updatePost(props.post.id, { heart: heartCount });
  };

  const handleTitle = str => {
    props.updatePost(props.post.id, { name: str });
  };

  const handleDescription = str => {
    props.updatePost(props.post.id, { description: str });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure you want to delete this post?",
      content: "This post will be deleted forever.",
      okText: "Confirm",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        props.deletePost(props.post.id);
        // Let's do that with Router afterwards so there's no page refresh
        window.location.pathname=`${props.artistId}`;
      },
      onCancel() {
        return null;
      }
    });
  }

  return (
    <StyledContent>
      <Row type="flex" justify="center">
        <Col>
          <PictureContainer>
            <HeroImg src={props.post.pictureUrl} alt="" />
          </PictureContainer>
        </Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col>
          <StyledH1 editable={{ onChange: handleTitle }}>
            {props.post.name}
          </StyledH1>
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
          <Button onClick={showDeleteConfirm}>Delete</Button>
        </StyledCenterCol>
      </Row>

      <Row type="flex" justify="start">
        <Col>
          <Link to={`/${props.post.artist_id}`}>
            <StyledH3 level={3} style={{ marginRight: 20 }}>
              {props.artistName}
            </StyledH3>
          </Link>
        </Col>
        <StyledCenterCol>
          <Tag>{props.post.categories}</Tag>
          {/* {props.post.categories.map(cat => (
            <Tag>{cat}</Tag>
          ))} */}
        </StyledCenterCol>
      </Row>

      <Row type="flex" justify="center">
        <Col>
          <Paragraph editable={{ onChange: handleDescription }}>
            {props.post.description}
          </Paragraph>
        </Col>
      </Row>
    </StyledContent>
  );
}

const PictureContainer = styled.div`
  width: 960px;
  padding-top: 2rem;
  background: url(${camera}) no-repeat center;
  background-size: 5%;
  position:relative;
`;
const HeroImg = styled.img`
  width: 100%;
  transition: all 0.6s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
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
