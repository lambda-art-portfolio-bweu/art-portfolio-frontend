import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArtist, updateArtist, fetchArtists } from '../actions/artists';
import Profile from '../components/Profile';

function ProfileView(props) {
  const { id } = props.match.params;

  useEffect(() => {
    props.fetchArtist(id);
  }, []);

  // Fetch all the artists when profile picture is updated
  // so the picture in the menu is also updated
  useEffect(() => {
    props.fetchArtists();
  }, [props.artist]);

  return (
    <>
      <Profile
      artist={props.artist}
      updateArtist={props.updateArtist}
      />
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
  { fetchArtist, updateArtist, fetchArtists }
)(ProfileView);
