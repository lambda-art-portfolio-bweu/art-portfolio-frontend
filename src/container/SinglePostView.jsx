import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/posts";
import { fetchArtist } from "../actions/artist";
import SinglePost from "../components/SinglePost";

function PostView(props) {
  useEffect(() => {
    props.fetchPost();
    props.fetchArtist();
  }, []);

  return (
    <>
      <SinglePost post={props.post} artistName={props.artistName} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    post: state.postsReducer.posts[0],
    artistName: state.artistsReducer.currentArtist.artistName,
  };
}

export default connect(
  mapStateToProps,
  { fetchPost, fetchArtist }
)(PostView);
