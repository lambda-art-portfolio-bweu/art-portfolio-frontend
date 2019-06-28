import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchArtist } from "../actions/artists";
import { deletePost } from "../actions/posts";
import Profile from "../components/profile/Profile";


function ProfileView(props) {

  const { id } = props.match.params;

  useEffect(() => {
    props.fetchArtist(id);
  }, []);

  return (
    <>
      <Profile artist={props.artists[0]} deletePost={props.deletePost}/>
    </>
  );
}

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists
  };
}

export default connect(
  mapStateToProps,
  { fetchArtist, deletePost }
)(ProfileView);
