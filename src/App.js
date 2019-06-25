import React, { useEffect } from "react";
import './App.css';
import { connect } from 'react-redux';
import { fetchArtists }from './actions/artists';

function App(props) {

  useEffect(() => {
    props.fetchArtists();
  },
  []);

  return (
    <div className="App">
      {props.artists.map(user => (
        <div key ={user.id}>
          <p>{user.id}</p>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    artists: state.user.artists,
  };
};

export default connect(mapStateToProps, { fetchArtists })(App);