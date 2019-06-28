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

export const createPost = post => dispatch => {
  dispatch({
    type: types.ADD_POST
  });
  Axios.post(postsAPI, post, {
    headers: {
      "Authorization":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NjE2NTIyMzAsImV4cCI6MTU2MTczODYzMH0.MtUoZsWRkyUAFcXFP-UqDDxHTroWM9tOKL-_8V974Do"
    }
  })
    .then(res => {
      debugger;
      dispatch({
        type: types.SUCCESS_POST,
        payload: res.data
      });
    })
    .catch(err => {
      debugger;
      dispatch({
        type: types.ERROR,
        payload: err.message
      });
    });
};