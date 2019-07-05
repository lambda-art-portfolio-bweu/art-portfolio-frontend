import * as types from './types';
import Axios from 'axios';
import * as Const from './const';

const baseUrl = Const.baseUrl;
const artistEndpoint = `${Const.baseUrl}/artist`;

export const fetchArtists = () => dispatch => {
  dispatch({
    type: types.GET_ARTISTS
  });
  Axios.get(artistEndpoint)
    .then(res => {
      dispatch({
        type: types.SUCCESS_ARTIST,
        payload: res.data.artist
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_ARTIST,
        payload: err.message
      });
    });
};

export const fetchArtist = id => dispatch => {
  dispatch({
    type: types.GET_ARTIST
  });
  Axios.get(`${artistEndpoint}/${id}`)
    .then(res => {
      dispatch({
        type: types.SUCCESS_GET_ARTIST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_ARTIST,
        payload: err.message
      });
    });
};

export const updateArtist = (id, currentArtistObj) => dispatch => {
  dispatch({ type: types.UPDATE_ARTIST });
  Axios.put(`${artistEndpoint}/${id}`, currentArtistObj, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
    .then(res => {
      dispatch({
        type: types.SUCCESS_GET_ARTIST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_ARTIST,
        payload: err.message
      });
    });
};

export const registerArtist = credentials => dispatch => {
  Axios.post(`${baseUrl}/auth/register`, credentials)
    .then(res => res.data)
    .catch(err => err.message);
};

export const loginArtist = credentials => dispatch => {
  dispatch({ type: types.LOGIN_ARTIST });
  Axios.post(`${baseUrl}/auth/login`, credentials)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_ERROR, payload: err.message });
    });
};

export const logoutArtist = () => {
  return { type: types.LOGOUT_ARTIST };
};
