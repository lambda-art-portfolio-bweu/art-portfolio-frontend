import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArtist } from '../actions/artists';
import Profile from '../components/profile/Profile';

function ProfileView(props) {
  const { id } = props.match.params;

  useEffect(() => {
    props.fetchArtist(id);
  }, []);

  return (
    <>
      <Profile artist={props.artist} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    artist: state.artistsReducer.currentArtist
  };
}

export default connect(
  mapStateToProps,
  { fetchArtist }
)(ProfileView);
