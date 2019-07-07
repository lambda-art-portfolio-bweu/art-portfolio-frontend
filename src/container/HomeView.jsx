import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import { fetchPosts } from "../actions/posts";
import ArtistsGrid from "../components/artistsblock/ArtistsGrid";

function ArtistView(props) {
  useEffect(() => {
    props.fetchArtists();
    props.fetchPosts();
  }, []);

  return (
    // <StyledContent>
    <>
      <h1 style={{ textAlign: "center" }}>
        Discover Amazing Photos from even more Amazing Photographers
      </h1>
      <ArtistsGrid
        artists={props.artists}
        loading={props.loading}
        posts={props.posts}
      />
    </>
  );
}

function mapStateToProps(state) {
  // debugger
  return {
    artists: state.artistsReducer.artists,
    loading: state.artistsReducer.fetching,
    posts: state.postsReducer.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchArtists, fetchPosts }
)(ArtistView);
