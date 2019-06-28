import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/posts";
import { fetchArtist } from "../actions/artists";
import SinglePost from "../components/SinglePost";

function PostView(props) {

  console.log(props.artistName);

  useEffect(() => {
    // props.fetchPost();
    props.fetchArtist(1);
  }, []);

  return (
    <>
    {props.artistName}
      <SinglePost post={props.post} artistName={props.artistName} />
    </>
  );
}

function mapStateToProps(state) {
  // debugger
  return {
    post: state.postsReducer.posts[0],
    artistName: state.artistsReducer.artists[0].artistName,
  };
}

export default connect(
  mapStateToProps,
  { fetchPost, fetchArtist }
)(PostView);
