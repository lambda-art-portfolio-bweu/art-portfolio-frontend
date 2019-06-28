import * as types from "../actions/types";

const initialState= {
  artists: [{
    id: '',
    artistName: "",
    userDescription: "",
    profilePictureUrl: "",
    username: "",
    email: "",
    pictureUrl: "",
    password: ""
  }],
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null,
  token: "",
  loggingIn: false,
  loggingOut: false,
  loggedIn: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case types.GET_ARTISTS:
        return {
          ...state,
          fetching: true
        };
      case types.GET_ARTIST:
        return {
          ...state,
          fetching: true
        };
      case types.ADD_ARTIST:
        return {
          ...state,
          adding: true
        };
      case types.UPDATE_ARTIST:
        return {
          ...state,
          updating: true
        };
      case types.DELETE_ARTIST:
        return {
          ...state,
          deleting: true
        };

        // Artist auth
      case types.LOGIN_ARTIST:
        return {
          ...state,
          loggingIn: true,
        };
      case types.LOGOUT_ARTIST:
        return {
          ...state,
          loggedIn: false
        };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
          loggingOut: false,
          token: action.payload
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
      case types.SUCCESS_ARTIST:
          return {
            ...state,
            artists: action.payload,
            fetching: false,
            adding: false,
            updating: false,
            deleting: false,
            error: null,
          };
      default:
        return state;
    }
};