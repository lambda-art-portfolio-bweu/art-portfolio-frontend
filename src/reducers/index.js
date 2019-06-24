import posts from './posts';
import user from './artist';
import { combineReducers } from 'redux';

export default combineReducers(posts, user);