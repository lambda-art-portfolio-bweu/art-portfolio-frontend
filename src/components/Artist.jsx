import React from 'react'

export default function Artist(props) {
    return (
      <div>
        <p>{props.artist.id}</p>
        <p>{props.artist.first_name}</p>
        <p>{props.artist.last_name}</p>
        <p>{props.artist.email}</p>
      </div>
    );
}
