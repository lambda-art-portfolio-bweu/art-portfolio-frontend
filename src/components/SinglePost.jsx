import React from 'react';
import styled from "styled-components";
import GlobalMenu from "./GlobalMenu";
import { Layout, Row, Col, Typography, Badge, Avatar, Tag } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function SinglePost(props) {

    return (
      <Layout className="layout">
        <GlobalMenu />
        <StyledContent>
          <Row type="flex" justify="center">
            <Col>
              <div>
                <img src={props.post.pictureUrl} alt="" />
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col>
              <StyledH1>{props.post.title}</StyledH1>
            </Col>
            <StyledCenterCol style={{ marginRight: 20 }}>
              <Badge count={13} overflowCount={999}>
                <Avatar shape="square" icon="heart" />
              </Badge>
            </StyledCenterCol>
          </Row>
          <Row type="flex" justify="start">
            <Col>
              <StyledH3 level={3} style={{ marginRight: 20 }}>
                {props.artistName}
              </StyledH3>
            </Col>
            <StyledCenterCol>
              {props.post.categories.map(cat => (
                <Tag>{cat}</Tag>
              ))}
            </StyledCenterCol>
          </Row>
          <Row type="flex" justify="center">
            <Col>
              <Paragraph>{props.post.description}</Paragraph>
            </Col>
          </Row>
        </StyledContent>
      </Layout>
    );
}

const StyledCenterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledH1 = styled(Title)`
  &.ant-typography {
    margin: 0.5rem 0;
  }
`
const StyledH3 = styled(Title)`
  &.ant-typography {
    margin: 0.2rem 0;
  }
`
const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
`
