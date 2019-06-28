import React from "react";
import { Card, Skeleton, Avatar } from "antd";
import { Carousel } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const Image = styled.img`
  width: 100%;
`;
export default function Artist(props) {
  const { artist } = props;

  return (
<Link to={`/${artist.id}`}>
    <Card
      loading={props.loading}
      hoverable
      style={{ width: 300 }}
      cover={
        <Carousel autoplay>
          <Image src={artist.pictureUrl} alt="post" />
          <Image src={artist.pictureUrl} alt="post" />
          <Image src={artist.pictureUrl} alt="post" />
        </Carousel>
      }
    >
      <Skeleton loading={props.loading} avatar active>
        <Meta
          avatar={<Avatar src={artist.profilePictureUrl} />}
          title={artist.artistName}
          description={artist.email}
        />
      </Skeleton>
    </Card>
    </Link>
  );
}
