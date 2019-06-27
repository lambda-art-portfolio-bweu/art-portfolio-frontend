import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchArtist } from "../actions/artists";
import Profile from "../components/profile/Profile";


function ProfileView(props) {
  // const { username } = props.match.params;
  const { id } = props.match.params;

  // console.log(id);

  // const [artists, setArtist] = useState();

  useEffect(() => {
    props.fetchArtist(id);
    // setArtist(props.artists);
    // setArtist(props.artists.filter(artist => {
    //   return artist.username === username;
    // })[0]
    // )
  }, []);

  console.log(props.artists);
  return (
    <>
      <Profile artist={props.artists[0]} />
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
  { fetchArtist }
)(ProfileView);
