import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchArtist } from "../actions/artist";
import Profile from "../components/profile/Profile";


function ProfileView(props) {
  useEffect(() => {
    props.fetchArtist();
  }, []);

  return (
    <>
      <Profile artist={props.currentArtist} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    currentArtist: state.artistsReducer.artists[0]
  };
}

export default connect(
  mapStateToProps,
  { fetchArtist }
)(ProfileView);
