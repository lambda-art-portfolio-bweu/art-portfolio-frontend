import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import AddPostModal from "./AddPostModal";
import PostsList from "./postslist/PostsList";
import GlobalMenu from './GlobalMenu';

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
      <GlobalMenu />
      <StyledContent>
        <ArtistinfoRow type="flex" justify="center">
          <StyledImgCol>
            <StyledImg
              src={props.artist.profilePictureUrl}
              alt={props.artist.artistName}
            />
          </StyledImgCol>
          <StyledInfoCol>
            <Title editable={{ onChange: handleName }}>{artistName}</Title>
            <Paragraph editable={{ onChange: handleDescription }}>
              {description}
            </Paragraph>
          </StyledInfoCol>
          <StyledButtonCol>
            <AddPostModal />
          </StyledButtonCol>
        </ArtistinfoRow>

        <Row type="flex" justify="center">
          <StyledButtonsCol />
        </Row>

        <StyledPostsRow type="flex" justify="center">
          <Col>
            <PostsList />
          </Col>
        </StyledPostsRow>
      </StyledContent>
    </Layout>
  );
}

// Style
const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
`
const ArtistinfoRow = styled(Row)`
  align-items:center;
  padding: 2rem 0;
`
const StyledImgCol = styled(Col)`
  width:20%;
`
const StyledImg = styled.img`
  width: 100%;
  max-width: 160px;
  border-radius: 90%;
`;
const StyledInfoCol = styled(Col)`
  width:60%;
`
const StyledButtonCol = styled(Col)`
  align-self: flex-end;
  margin-left:-8rem;
  margin-bottom:-1.5rem;
`
const StyledPostsRow = styled(Row)`
  /* border-top: 0.1rem solid black; */

  .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const StyledButtonsCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
    width:80%;
`