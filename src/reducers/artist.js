import * as types from '../actions/types';

const initialState = {
  artists: [
    {
      id: '',
      artistName: '',
      userDescription: '',
      profilePictureUrl: '',
      username: '',
      email: '',
      pictureUrl: '',
      password: ''
    }
  ],
  currentArtist: {},
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null,
  authId: '',
  token: '',
  loggingIn: false,
  loggingOut: false,
  loggedIn: false
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
    case types.SUCCESS_ARTIST:
      return {
        ...state,
        artists: action.payload,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: null
      };
    case types.SUCCESS_GET_ARTIST:
      return {
        ...state,
        currentArtist: action.payload,
        fetching: false,
        adding: false,
        updating: false,
        deleting: false,
        error: null
      };
    case types.ERROR_ARTIST:
      return {
        ...initialState,
        error: action.payload
      };

    // Artist auth
    case types.LOGIN_ARTIST:
      return {
        ...state,
        loggingIn: true
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
        token: action.payload.token,
        authId: action.payload.id
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        loggingOut: false,
        error: action.payload
      };

    default:
      return state;
  }
}
