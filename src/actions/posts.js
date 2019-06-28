import * as types from "./types";
import Axios from "axios";

const postsAPI = 'https://art-portfolio-bweu.herokuapp.com/posts';

export const fetchPosts = () => dispatch => {
  dispatch({
    type: types.GET_POSTS
  });
  Axios.get(postsAPI)
  .then(res => {
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_POST,
        payload: err.message
      });
    });
};


export const fetchPost = id => dispatch => {
  // debugger
  dispatch({
    type: types.GET_POST
  });
  Axios.get(`${postsAPI}/${id}`)
    .then(res => {
      // debugger
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      // debugger
      dispatch({
        type: types.ERROR_POST,
        payload: err.message
      });
    });
};
export const deletePost = id => dispatch => {
  dispatch({
    type: types.DELETE_POST
  });
  Axios.delete(`${postsAPI}/${id}`)
    .then(res => {
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_POST,
        payload: err.message
      });
    });
};

export const createPost = post => dispatch => {
  dispatch({
    type: types.ADD_POST
  });
  Axios.post(postsAPI, post, {
    "headers": {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    }
  })
    .then(res => {
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_POST,
        payload: err.message
      });
    });
};