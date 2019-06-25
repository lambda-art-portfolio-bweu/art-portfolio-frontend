import React from "react";
import { Layout, Row, Col, Typography, Button } from 'antd';
import styled from 'styled-components';

export default function Profile(props) {
  return (
    <Layout className="layout">
      <StyledContent>
        <StyledHeader type="flex" justify="center">
          <Col span={3}>
            <div>
              <StyledImg
                src={props.artist.profilePictureUrl}
                alt={props.artist.artistName}
              />
            </div>
          </Col>
          <Col span={7}>
            <Title>{props.artist.artistName}</Title>
            <Paragraph>{props.artist.userDescription}</Paragraph>
          </Col>
        </StyledHeader>

        <Row type="flex" justify="center">
          <StyledButtonsCol span={12}>
            <Button type="primary" style={{ margin: "0.8rem" }}>
              Add Post
            </Button>
            <Button type="primary" style={{ margin: "0.8rem" }}>
              Edit Profile
            </Button>
          </StyledButtonsCol>
        </Row>

        <StyledPosts type="flex" justify="center">
          <Col span={12} >
            <Title level={3}>No posts yet.</Title>
          </Col>
        </StyledPosts>
      </StyledContent>
    </Layout>
  );
}

// Antd 
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Styled Components
const StyledHeader = styled(Row)`
    min-height:150px;
    padding:2rem 0 0 0;
    display: flex;
    align-items:center;
`
const StyledPosts = styled(Row)`
  border-top: 0.1rem solid black;

  .ant-col {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const StyledButtonsCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
`

const StyledImg = styled.img`
    width:100%;
    max-width: 180px;
`
const StyledContent = styled(Content)`
`
