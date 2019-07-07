import React from 'react';
import { Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const { Meta } = Card;
  const { post } = props;

  const postLink = props.post.name.replace(/\W/g, '-');
  const id = props.post.id;
  return (
    <Link to={`${props.username}/posts/${postLink}-${id}`}>
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
