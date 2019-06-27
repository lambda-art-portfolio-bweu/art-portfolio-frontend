import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import Artists from "../components/Artists";

function ArtistView(props) {
  useEffect(() => {
    props.fetchArtists();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Buy Amazing Photos from even more Amazing Photographers
      </h1>
      <Artists artists={props.artists.slice(1, 5)} loading={props.loading} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists,
    loading: state.artistsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { fetchArtists }
)(ArtistView);
