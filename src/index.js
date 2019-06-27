import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import { LOGIN_SUCCESS } from './actions/types';

const addTokenToLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", action.payload);
  }
  next(action);
};


const store = createStore(
  rootReducer,
  // {},
  compose(
    applyMiddleware(thunk, addTokenToLocalStorage),
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
