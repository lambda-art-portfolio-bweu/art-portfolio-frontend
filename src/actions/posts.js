import uuid from "uuid";
import faker from "faker";
import * as types from "./types";

function generatePosts() {
  let posts = [];
  for (let i = 1; i <= 10; i++) {
    let id = uuid();
    let title = faker.name.title();
    let description = faker.lorem.words(30);
    let categories = ['fashion','nature','sport','art'];
    let pictureUrl = faker.random.image();

    posts.push({
      id,
      title,
      description,
      categories,
      pictureUrl,
    });
  }
  return posts;
}

export function fetchPosts() {
  return {
    type: types.GET_POSTS,
    payload: generatePosts()
  };
}

function generatePost() {
    let id = uuid();
    let title = faker.name.title();
    let description = faker.lorem.words(30);
    let categories = ['fashion','nature','sport','art'];
    let pictureUrl = faker.random.image();

    const post = [{
      id,
      title,
      description,
      categories,
      pictureUrl,
    }];
  return post;
}

export function fetchPost() {
  return {
    type: types.GET_POST,
    payload: generatePost()
  };
}
