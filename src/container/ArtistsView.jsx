import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import { fetchPosts } from "../actions/posts";
import Artists from "../components/Artists";

function ArtistView(props) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    props.fetchArtists();
    props.fetchPosts();
  }, []);

  useEffect(() => {
    const res = props.artists.map((artist, i) => ({
      ...artist,
      pictureUrl: props.posts[i]["pictureUrl"]
    }));
    setArtists(res);
    console.log(res[0]);
  }, [props.artists]);

  return <Artists artists={artists} loading={props.loading} />;
}

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists,
    posts: state.postsReducer.posts,
    loading: state.artistsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { fetchArtists, fetchPosts }
)(ArtistView);
