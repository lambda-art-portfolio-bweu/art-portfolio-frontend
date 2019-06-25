import * as types from "../actions/types";

const initialPost = {
  posts: [
    {
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
    case types.GET_POST:
      return {
        ...state,
        fetching: true,
        posts: action.payload
      };
    case types.ADD_POST:
        return {
        ...state,
        adding: true,
        posts: [...state.posts, action.payload]
      };
    case types.UPDATE_POST:
        return {
            ...state,
            updating: true,
            posts: [...state.posts, action.payload]
        };
    case types.DELETE_POST:
        return {
            ...state,
            deleting: true,
            posts: [...state.posts, action.payload]
        };
    case types.ERROR:
        return {
          ...state,
          fetching: false,
          adding: false,
          updating: false,
          deleting: false,
          error: action.payload,
        };
    case types.SUCCESS:
        return {
          ...state,
          fetching: false,
          adding: false,
          updating: false,
          deleting: false,
          error: null,
        };
    default:
      return state;
  }
}
