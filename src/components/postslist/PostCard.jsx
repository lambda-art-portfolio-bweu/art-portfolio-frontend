import React from "react";
import { Card, Skeleton, Icon } from "antd";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { Meta } = Card;
  const { post } = props;

  return (
    <Link to={`${props.artistID}/posts/${props.post.id}`}>
      <Card
        loading={props.loading}
        hoverable
        style={{ width: 300 }}
        cover={<img src={post.pictureUrl} alt="" />}
        actions={[<Icon type="edit" />, <Icon type="delete" />]}
      >
        <Skeleton loading={props.loading} avatar active>
          <Meta title={post.name} description={post.description} />
        </Skeleton>
      </Card>
    </Link>
  );
}
