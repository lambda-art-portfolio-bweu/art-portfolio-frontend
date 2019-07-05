import React from 'react';
import { Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const { Meta } = Card;
  const { post } = props;

  return (
    <Link
      to={`${props.username}/posts/${props.post.name.replace(/\s+/g, '_')}`}
    >
      <Card
        loading={props.loading}
        hoverable
        style={{ width: 300 }}
        cover={<img src={post.pictureUrl} alt="" />}
      >
        <Skeleton loading={props.loading} avatar active>
          <Meta title={post.name} description={post.description} />
        </Skeleton>
      </Card>
    </Link>
  );
}
