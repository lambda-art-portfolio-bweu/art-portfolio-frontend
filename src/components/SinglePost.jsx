import React from 'react';
import { Layout, Row, Col, Typography, Icon } from "antd";
import styled from "styled-components";

// Style is under the component
const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function SinglePost(props) {

    return (
      <Layout className="layout">
        <Content>
            <Row type="flex" justify="center">
              <Col>
                <img src={props.post.pictureUrl} alt="" />
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col span={10}>
                <Title>{props.post.title}</Title>
              </Col>
              <Col span={2}>
                <Icon type="heart" />
              </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Paragraph>{props.post.categories}</Paragraph>
                    <Paragraph>{props.post.description}</Paragraph>
                </Col>
            </Row>
        </Content>
      </Layout>
    );
}
