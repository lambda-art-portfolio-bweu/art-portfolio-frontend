import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import Posts from "../components/Posts";

function PostView(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return <Posts posts={props.posts} />;
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostView);
