import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/posts';
import PostCard from './PostCard';
import { Row, Empty } from 'antd';
import AddPostModal from '../AddPostModal';

//Style
export const spacerCol = 24;

function PostsList(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  if (props.posts.length) {
    return (
      <Row gutter={spacerCol}>
        {props.posts
          .filter(post => post.artist_id === props.id)
          .map(post => (
            <PostCard
              deletePost={props.deletePost}
              post={post}
              key={post.id}
              username={props.username}
              artistID={props.id}
            />
          ))}
      </Row>
    );
  }
  return (
    <Empty
      description={
        <span>
          No post yet! <AddPostModal />
        </span>
      }
    />
  );
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts, deletePost }
)(PostsList);
