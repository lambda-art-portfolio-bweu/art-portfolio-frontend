import * as types from "../actions/types";

const initialUser = {
  artists: [{
    id: "",
    artistName: "",
    userDescription: "",
    profilePictureUrl: "",
    username: "",
    email: "",
    password: ""
  }],
  currentArtist: {
    id: "",
    artistName: "",
    userDescription: "",
    profilePictureUrl: "",
    username: "",
    email: "",
    password: ""
  },
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null,
  token: "",
  loggingIn: false,
  loggingOut: false,
  loggedIn: false,
  loggedOut: false
};

export default function userReducer(state = initialUser, action) {
    switch (action.type) {

      // CRUD artist
      case types.GET_ARTIST:
        return {
          ...state,
          fetching: true,
          currentArtist: action.payload
        };
      case types.ADD_ARTIST:
        return {
          ...state,
          adding: true,
          artist: action.payload
        };
      case types.UPDATE_ARTIST:
        return {
          ...state,
          updating: true,
          artists: action.payload
        };
      case types.DELETE_ARTIST:
        return {
          ...state,
          deleting: true,
          artists: action.payload
        };

        // Artist auth
      case types.LOGIN_ARTIST:
        return {
          ...state,
          loggingIn: true,
          token: action.payload
        };
      case types.LOGOUT_ARTIST:
        return {
          ...state,
          loggingOut: true
        };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
          loggingOut: false,
          loggedOut: false
        };
      case types.LOGOUT_SUCCESS:
        return initialUser;

      // Get all artists
      case types.GET_ALL_ARTISTS:
        return {
          ...state,
          fetching: true,
          artists: action.payload
        };
      default:
        return state;
    }
};