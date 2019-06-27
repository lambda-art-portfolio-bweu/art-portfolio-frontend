import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/posts";
import PostCard from './PostCard';
import { Row, Empty } from "antd";
import AddPostModal from "../AddPostModal";

//Style 
export const spacerCol = 24;

function PostsList(props) {
  
  useEffect(() => {
    props.fetchPosts();
  }, []);


  if (props.posts.length) {
    return (
        <Row gutter={spacerCol}>
          {props.posts.map(post => (
            <PostCard post={post} key={post.id} />
          ))}
        </Row>
      );
  } 
  return (
    <Empty
      description={
        <span>
          No post yet! <AddPostModal/>
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
  { fetchPosts }
  )(PostsList);

