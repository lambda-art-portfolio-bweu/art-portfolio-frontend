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
        type: types.ERROR,
        payload: err.message
      });
    });
};


export const fetchPost = id => dispatch => {
  dispatch({
    type: types.GET_POST
  });
  Axios.get(`${postsAPI}/${id}`)
    .then(res => {
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR,
        payload: err.message
      });
    });
};