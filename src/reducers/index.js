import postsReducer from './posts';
import artistsReducer from './artist';
import { combineReducers } from 'redux';

export default combineReducers({ postsReducer, artistsReducer });