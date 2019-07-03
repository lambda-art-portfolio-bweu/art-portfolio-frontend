import * as types from './types';
import Axios from 'axios';
import * as Const from './const';

const baseUrl = Const.baseUrl;
const artistEndpoint = `${Const.baseUrl}/artist`;

export const fetchArtists = () => dispatch => {
  dispatch({
    type: types.GET_ARTISTS
  });
  Axios.get(artistEndpoint)
    .then(res => {
      dispatch({
        type: types.SUCCESS_ARTIST,
        payload: res.data.artist
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR_ARTIST,
        payload: err.message
      });
    });
};

export const fetchArtist = id => dispatch => {
  dispatch({
    type: types.GET_ARTIST
  });
  Axios.get(`${artistEndpoint}/${id}`)
    .then(res => {
      dispatch({
        type: types.SUCCESS_GET_ARTIST,
        payload: res.data.artist[0]
      });
    })
    .catch(err => {
      // debugger
      dispatch({
        type: types.ERROR_ARTIST,
        payload: err.message
      });
    });
};

//

export const registerArtist = credentials => dispatch => {
  Axios.post(`${baseUrl}/auth/register`, credentials)
    .then(res => res.data)
    .catch(err => err.message);
};

export const loginArtist = credentials => dispatch => {
  dispatch({ type: types.LOGIN_ARTIST });
  Axios.post(`${baseUrl}/auth/login`, credentials)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_ERROR, payload: err.message });
    });
};

export const logoutArtist = () => {
  return { type: types.LOGOUT_ARTIST };
};

// function generateUsers() {
//   let users = [];
//   for (let i = 1; i <= 10; i++) {
//     let id = uuid();
//     let artistName = faker.name.findName();
//     let userDescription = faker.lorem.words(20);
//     let profilePictureUrl = faker.image.avatar();
//     let username = faker.name.lastName();
//     let email = faker.internet.email();
//     let password = faker.random.alphaNumeric(10);

//     users.push({
//       id,
//       artistName,
//       userDescription,
//       profilePictureUrl,
//       username,
//       email,
//       password
//     });
//   }
//   let posts = generatePosts()

//   return new Promise((resolve, reject) => {
//     if (!users) {
//       reject("Couldn't fetch Artists");
//     }
//     resolve(users.map((user, i) => ({
//       ...user,
//       pictureUrl: posts[i]["pictureUrl"]
//     })));
//   });
// }

// function generateUser() {
//   let id = uuid();
//   let artistName = faker.name.findName();
//   let userDescription = faker.lorem.words(20);
//   let profilePictureUrl = faker.image.avatar();
//   let username = faker.name.lastName();
//   let email = faker.internet.email();
//   let password = faker.random.alphaNumeric(10);

//   const user = {
//     id,
//     artistName,
//     userDescription,
//     profilePictureUrl,
//     username,
//     email,
//     password
//   };

//   return user;
// }
