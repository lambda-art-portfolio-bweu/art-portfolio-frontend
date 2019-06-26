import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography, Button } from 'antd';
import styled from 'styled-components';
import AddPostModal from "./AddPostModal";

// Style under component

export default function Profile(props) {
  const [description, setDescription] = useState('');
  const [artistName, setArtistName] = useState('');

  // Re-render when props are modified
  useEffect(() => {
    setDescription(props.artist.userDescription);
    setArtistName(props.artist.artistName);
  }, [props])

  // Set the string
  const handleDescription = str => setDescription(str);
  const handleName = str => setArtistName(str);

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
            <Title editable={{ onChange: handleName }}>{artistName}</Title>
            <Paragraph editable={{ onChange: handleDescription }}>
              {description}
            </Paragraph>
          </Col>
        </StyledHeader>

        <Row type="flex" justify="center">
          <StyledButtonsCol span={12}>
            <AddPostModal />
          </StyledButtonsCol>
        </Row>

        <StyledPosts type="flex" justify="center">
          <Col span={12}>
            <Title level={3}>No posts yet.</Title>
          </Col>
        </StyledPosts>
      </StyledContent>
    </Layout>
  );
}

// Style

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
