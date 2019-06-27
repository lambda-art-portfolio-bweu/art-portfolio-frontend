import postsReducer from './post';
import artistsReducer from './artist';
import { combineReducers } from 'redux';

export default combineReducers({ postsReducer, artistsReducer });