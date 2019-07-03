import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import AddPostModal from '../AddPostModal';
import PostsList from '../postslist/PostsList';

// Style is under the component
const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Profile(props) {

  const handleDescription = str => {
    props.updateArtist(props.artist.id, { artistDescription: str })
  }

  const handleName = str => {
    props.updateArtist(props.artist.id, { artistName: str })
  };

  return (
    <StyledContent>
      <ArtistinfoRow type="flex" justify="center">
        <StyledImgCol span={6}>
          <StyledImg
            src={props.artist.profilePictureUrl}
            alt={props.artist.artistName}
          />
        </StyledImgCol>
        <StyledInfoCol span={18}>
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
          <PostsList
            //  username={props.artist.username}
            id={props.artist.id}
          />
        </Col>
      </StyledPostsRow>
    </StyledContent>
  );
}

const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const ArtistinfoRow = styled(Row)`
  align-items: center;
  padding: 2rem 0;
`;
const StyledImgCol = styled(Col)`
  width: 20%;
`;
const StyledImg = styled.img`
  width: 100%;
  max-width: 160px;
  border-radius: 90%;
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