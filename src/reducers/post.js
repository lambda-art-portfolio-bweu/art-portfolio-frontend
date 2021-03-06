import * as types from '../actions/types';

const initialState = {
  posts: [
    {
      id: '',
      name: '',
      description: '',
      categories: [],
      pictureUrl: ''
    }
  ],
  currentPost: {},
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        fetching: true
      };
    case types.GET_POST:
      return {
        ...state,
        fetching: true
      };
    case types.ADD_POST:
      return {
        ...state,
        adding: true
      };
    case types.UPDATE_POST:
      return {
        ...state,
        updating: true
      };
    case types.DELETE_POST:
      return {
        ...state,
        deleting: true
      };

    case types.ERROR_POST:
      return {
        ...initialState,
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
        error: false
      };
    case types.SUCCESS_GET_POST:
      return {
        ...state,
        currentPost: action.payload,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: false
      };
    default:
      return state;
  }
}
