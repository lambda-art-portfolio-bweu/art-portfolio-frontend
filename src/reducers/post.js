import * as types from "../actions/types";

const initialPost = {
  posts: [
    {
      id: '',
      name: "",
      description: "",
      categories: [],
      pictureUrl: ""
    },
  ],
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null
};

export default function postsReducer(state = initialPost, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        fetching: true,
      };
    case types.GET_POST:
      return {
        ...state,
        fetching: true,
      };
    case types.ADD_POST:
      return {
        ...state,
        adding: true,
      };
    case types.UPDATE_POST:
      return {
        ...state,
        updating: true,
      };
    case types.DELETE_POST:
      return {
        ...state,
        deleting: true,
      };

    case types.ERROR_POST:
      return {
        ...state,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: action.payload
      };
    case types.SUCCESS_POST:
      return {
        ...state,
        posts: action.payload,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: null
      };
    default:
      return state;
  }
}
