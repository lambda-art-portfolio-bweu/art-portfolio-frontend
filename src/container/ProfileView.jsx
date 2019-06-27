import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchArtist } from "../actions/artist";
import Profile from "../components/profile/Profile";


function ProfileView(props) {
  const { username } = props.match.params;
  const [artist, setArtist] = useState({
    id: "",
    artistName: "",
    userDescription: "",
    profilePictureUrl: "",
    username: "",
    email: "",
    pictureUrl: "",
    password: ""
  });

  useEffect(() => {
    props.fetchArtist();
    setArtist(props.artists.filter(artist => {
      return artist.username === username;
    })[0]
    )
  }, []);

  return (
    <>
      <Profile artist={artist} />
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
