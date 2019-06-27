import React from "react";
import { Card, Skeleton, Avatar } from "antd";
import { Carousel } from "antd";

const { Meta } = Card;

export default function Artist(props) {
  const { artist } = props;

  return (
    <Card
      loading={props.loading}
      hoverable
      style={{ width: 300 }}
      cover={
        <Carousel>
          <img src={artist.pictureUrl} alt="" />
          <img src={artist.pictureUrl} alt="" />
          <img src={artist.pictureUrl} alt="" />
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
  );
}
