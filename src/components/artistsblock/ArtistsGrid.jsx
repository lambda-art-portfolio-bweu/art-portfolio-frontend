import React from "react";
import Artist from "./Artist";
import styled from "styled-components";

const ArtistCon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  /* padding: 3rem 8vw; */
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export default function Artists(props) {
  return (
    <ArtistCon>
      {props.artists.map(artist => (
        <Artist artist={artist} key={artist.id} posts={props.posts} loading={props.loading} />
      ))}
    </ArtistCon>
  );
}