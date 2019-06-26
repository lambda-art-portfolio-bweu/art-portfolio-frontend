import React from "react";
import { Card, Skeleton, Avatar } from "antd";

const { Meta } = Card;

export default function Artist(props) {
  const { artist } = props;
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
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
