import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      Tada
    </div>
  );
}

export default connect(null,{})(App);