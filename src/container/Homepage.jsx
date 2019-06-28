import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions/artists";
import Artists from "../components/Artists";
import { Layout} from "antd";
import styled from "styled-components";
const { Content } = Layout;

function ArtistView(props) {
  useEffect(() => {
    props.fetchArtists();
  }, []);

  return (
    // <StyledContent>
      <>
      <h1 style={{ textAlign: "center" }}>
        Buy Amazing Photos from even more Amazing Photographers
      </h1>
      <Artists artists={props.artists.slice(1, 5)} loading={props.loading} />
      </>
    // </StyledContent>
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

const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;