import uuid from "uuid";
import faker from "faker";
import * as types from "./types";

function generateUsers() {
  let users = [];
  for (let i = 1; i <= 10; i++) {
    let id = uuid();
    let artistName = faker.name.findName();
    let userDescription = faker.lorem.words(20);
    let profilePictureUrl = faker.image.avatar();
    let username = faker.name.lastName();
    let email = faker.internet.email();
    let password = faker.random.alphaNumeric(10);

    users.push({
      id,
      artistName,
      userDescription,
      profilePictureUrl,
      username,
      email,
      password
    });
  }
  return new Promise((resolve, reject) => {
    if (!users) {
      reject("Couldn't fetch Artists");
    }
    resolve(users);
  });
}

export const fetchArtists = () => dispatch => {
  dispatch({
    type: types.GET_ARTISTS
  });
  generateUsers()
    .then(res => {
      dispatch({
        type: types.SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: types.ERROR,
        payload: err
      });
    });
};

function generateUser() {
  let id = uuid();
  let artistName = faker.name.findName();
  let userDescription = faker.lorem.words(20);
  let profilePictureUrl = faker.image.avatar();
  let username = faker.name.lastName();
  let email = faker.internet.email();
  let password = faker.random.alphaNumeric(10);

  const user = {
    id,
    artistName,
    userDescription,
    profilePictureUrl,
    username,
    email,
    password
  };

  return user;
}

export function fetchArtist() {
  return {
    type: types.GET_ARTIST,
    payload: generateUser()
  };
}
