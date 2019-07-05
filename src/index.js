import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import { LOGIN_SUCCESS, LOGOUT_ARTIST } from './actions/types';

const addToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('authId', action.payload.id);
  }
  next(action);
};

const removeToken = store => next => action => {
  if (action.type === LOGOUT_ARTIST) {
    localStorage.removeItem('token');
  }
  next(action);
};

const store = createStore(
  rootReducer,
  // {},
  compose(
    applyMiddleware(thunk, addToken, removeToken),
    // applyMiddleware(setToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
