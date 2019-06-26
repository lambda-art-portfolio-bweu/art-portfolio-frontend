import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/posts";
import PostCard from './PostCard';
import { Row} from "antd";


function PostsList(props) {
  
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <Row gutter={spacerCol}>
      {props.posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </Row>
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


//Style 
export const spacerCol = 24;