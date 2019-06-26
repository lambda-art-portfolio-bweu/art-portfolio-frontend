import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import AddPostModal from "./AddPostModal";
import PostsList from "./postslist/PostsList";

// Style is under the component
const { Content } = Layout;
const { Title, Paragraph } = Typography;

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
      <Content>
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
            <PostsList />
          </Col>
        </StyledPosts>
      </Content>
    </Layout>
  );
}

// Style

const StyledHeader = styled(Row)`
    min-height:150px;
    padding:2rem 0 0 0;
    /* display: flex;
    align-items:center; */
`
const StyledPosts = styled(Row)`
  border-top: 0.1rem solid black;

  .ant-col {
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