import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/posts";
import { fetchArtist } from "../actions/artists";
import SinglePost from "../components/SinglePost";

function PostView(props) {
  const { id, postId } = props.match.params;

  useEffect(() => {
    props.fetchPost(postId);
    props.fetchArtist(id);
  }, []);

  return (
    <>
      <SinglePost post={props.post} artistName={props.artistName} />
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
  { fetchPost, fetchArtist }
)(PostView);
