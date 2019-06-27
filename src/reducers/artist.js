import * as types from "../actions/types";

const initialUser = {
  artists: Array.from({length: 10}, (d,i) => ({
    id: i,
    artistName: "",
    userDescription: "",
    profilePictureUrl: "",
    username: "",
    email: "",
    pictureUrl: "",
    password: ""
  })),
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