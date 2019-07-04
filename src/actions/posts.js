import * as types from "./types";
import Axios from "axios";
import * as Const from "./const";

const postsEndpoint = `${Const.baseUrl}/posts`;

export const fetchPosts = () => dispatch => {
  dispatch({
    type: types.GET_POSTS
  });
  Axios.get(postsEndpoint)
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
  Axios.get(`${postsEndpoint}/${id}`)
    .then(res => {
      // debugger
      dispatch({
        type: types.SUCCESS_GET_POST,
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
  debugger
  dispatch({
    type: types.DELETE_POST
  });
  return (
    Axios.delete(`${postsEndpoint}/${id}`)
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
      })
  )
};

export const createPost = post => dispatch => {
  dispatch({
    type: types.ADD_POST
  });
  Axios.post(postsEndpoint, post, {
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

export const updatePost = (id, currentPostObj) => dispatch => {
  dispatch({ type: types.UPDATE_POST });
  Axios.put(`${postsEndpoint}/${id}`, currentPostObj, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => {
      // debugger;
      dispatch({
        type: types.SUCCESS_GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      // debugger;
      dispatch({
        type: types.ERROR_POST,
        payload: err.message
      });
    });
};