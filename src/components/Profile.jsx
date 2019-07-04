import React, { useState } from 'react';
import { Row, Col, Typography, Modal, Input } from 'antd';
import styled from 'styled-components';

import AddPostModal from './AddPostModal';
import PostsGrid from './postsblock/PostsGrid';
import camera from '../assets/camera.svg';

const { Title, Paragraph } = Typography;

export default function Profile(props) {
  const [visible, setVisible] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const handleDescription = str => {
    props.updateArtist(props.artist.id, { artistDescription: str })
  };

  const handleName = str => {
    props.updateArtist(props.artist.id, { artistName: str });
  };

  const handleURL = target => {
    setImageURL(target.value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    props.updateArtist(props.artist.id, { profilePictureUrl: imageURL });
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };


  return (
    <MainContainer>
      <ArtistinfoRow type="flex" justify="center">
        <StyledImgCol>
          <PictureContainer>
            <ProfileImg
              src={props.artist.profilePictureUrl}
              alt={props.artist.artistName}
              onClick={showModal}
            />
            <CameraImg
              src={camera}
              alt={props.artist.artistName}
              onClick={showModal}
            />
          </PictureContainer>
          <Modal
            title="Update image"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              placeholder="Add your new image URL"
              id="url"
              onChange={e => handleURL(e.target)}
            />
          </Modal>
        </StyledImgCol>
        <StyledInfoCol>
          <Title editable={{ onChange: handleName }}>
            {props.artist.artistName}
          </Title>
          <Paragraph editable={{ onChange: handleDescription }}>
            {props.artist.artistDescription}
          </Paragraph>
        </StyledInfoCol>
        <StyledButtonCol>
          <AddPostModal id={props.artist.id} />
        </StyledButtonCol>
      </ArtistinfoRow>

      <Row type="flex" justify="center">
        <StyledButtonsCol />
      </Row>

      <StyledPostsRow type="flex" justify="center">
        <Col>
          <PostsGrid id={props.artist.id} />
        </Col>
      </StyledPostsRow>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100%;
`;

const ArtistinfoRow = styled(Row)`
  align-items: center;
  padding: 2rem 0;
`;
const StyledImgCol = styled(Col)`
  width: 20%;
`;
// Image overlay
const PictureContainer = styled.div`
  max-width: 160px;
  position: relative;
  display: inline-block;
`;
const ProfileImg = styled.img`
  width: 100%;
  border-radius: 90%;
`;
const CameraImg = styled.img`
  width: 100%;
  border-radius: 90%;
  opacity: 0;
  padding: 3rem;
  background-color: hsla(0, 0%, 100%, 0.7);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  &:hover {
    opacity:1;
  }
`;

const StyledInfoCol = styled(Col)`
  width: 60%;
`;
const StyledButtonCol = styled(Col)`
  align-self: flex-end;
  margin-left: -8rem;
  margin-bottom: -1.5rem;
`;
const StyledPostsRow = styled(Row)`
  .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledButtonsCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;