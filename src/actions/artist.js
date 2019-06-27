import uuid from 'uuid';
import faker from 'faker';
import * as types from './types';

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

export function fetchArtist() {
  return {
    type: types.GET_ARTIST,
    payload: generateUser()
  };
}
