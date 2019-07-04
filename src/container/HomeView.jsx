import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import { fetchPosts } from "../actions/posts";
import Artists from "../components/artistsblock/ArtistsGrid";
import { Layout } from "antd";
import styled from "styled-components";
const { Content } = Layout;

function ArtistView(props) {
  useEffect(() => {
    props.fetchArtists();
    props.fetchPosts();
  }, []);

  return (
    // <StyledContent>
    <>
      <h1 style={{ textAlign: "center" }}>
        Buy Amazing Photos from even more Amazing Photographers
      </h1>
      <Artists
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

// const StyledContent = styled(Content)`
//   max-width: 960px;
//   margin: 0 auto;
//   margin-bottom: 2rem;
// `;
