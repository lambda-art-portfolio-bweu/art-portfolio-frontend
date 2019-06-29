import React from "react";
import { Card, Skeleton, Icon } from "antd";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { Meta } = Card;
  const { post } = props;

  return (
    <Card
      loading={props.loading}
      hoverable
      style={{ width: 300 }}
      cover={<img src={post.pictureUrl} alt="" />}
      actions={[
        <Icon type="edit" />,
        <Icon type="delete" onClick={() => props.deletePost(post.id)} />
      ]}
    >
      <Skeleton loading={props.loading} avatar active>
        <Link to={`${props.artistID}/posts/${props.post.id}`}>
          <Meta title={post.name} description={post.description} />
        </Link>
      </Skeleton>
    </Card>
  );
}
