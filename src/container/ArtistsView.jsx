import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import Artists from '../components/Artists';

function ArtistView(props) {
  useEffect(() => {
    props.fetchArtists();
  }, []);

  return (
    <Artists artists={props.artists}/>
  );
}

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists
  };
}

export default connect(
  mapStateToProps,
  { fetchArtists }
)(ArtistView);
