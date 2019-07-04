import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost } from "../actions/posts";
import { fetchArtist } from "../actions/artists";
import Post from "../components/Post";

function PostView(props) {
  const { id, postId } = props.match.params;

  useEffect(() => {
    props.fetchPost(postId);
    props.fetchArtist(id);
  }, []);

  return (
    <>
      <Post post={props.post} artistName={props.artistName} updatePost={props.updatePost} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    post: state.postsReducer.currentPost,
    artistName: state.artistsReducer.currentArtist.artistName
  };
}

export default connect(
  mapStateToProps,
  { fetchPost, fetchArtist, updatePost }
)(PostView);
