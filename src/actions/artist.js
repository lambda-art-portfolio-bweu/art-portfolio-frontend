import uuid from 'uuid';
import faker from 'faker';
import * as types from './types';
import Axios from 'axios';

function generateUser() {
  let id = uuid();
  // let artistName = faker.name.findName();
  let artistName = "Joel";
  let userDescription = faker.lorem.words(20);
  let profilePictureUrl = faker.image.avatar();
  let username = faker.name.lastName();
//   let email = faker.internet.email();
//   let password = faker.random.alphaNumeric(10);

  const user = {
    id,
    artistName,
    userDescription,
    profilePictureUrl,
    username,
    // email,
    // password
  };

  return user;
}

const baseUrl = 'https://art-portfolio-bweu.herokuapp.com';

export function fetchArtist() {
  return {
    type: types.GET_ARTIST,
    payload: generateUser()
  };
}

export const registerArtist = (credentials) => dispatch =>  {
  Axios.post(`${baseUrl}/auth/register`, credentials)
  .then(res => res.data)
  .catch(err => err.message)
}

export const loginArtist = (credentials) => dispatch =>  {
  Axios.post(`${baseUrl}/auth/login`, credentials)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token,
      });
    })
    .catch(err => err.message);
}
