import React from 'react';
import Artist from './Artist';

export default function Artists(props) {
    return (
      <div>
        {props.artists.map(artist => (
          <Artist artist={artist}/>
        ))}
      </div>
    );
}
