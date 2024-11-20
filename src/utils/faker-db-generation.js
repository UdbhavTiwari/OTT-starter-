import { faker } from "@faker-js/faker";
import { create } from "framer-motion/client";

export const database = {
  users: [],
  profiles: [],
  content: [],
};

export const uniqueID = (function () {
  let id = 0;
  return function () {
    id++;
    return id;
  };
})();

//generate unique email using faker
//generate unique id

function createUser() {
  const user = {
    id: uniqueID(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 123456,
  };
  return user;
}

function createContent() {
  const content = {
    id: uniqueID(),
    title: faker.book.title(),
    genre: faker.helpers.arrayElements([
      "sci-fi",
      "action",
      "horror",
      "adventure",
      "thriller",
      "fantasy",
      "comedy",
    ]),
    description: faker.food.description(),
    thumbnail: faker.image.avatar(),
    type: faker.helpers.arrayElement(["series", "movie"]),
    releaseDate: Date.now(),
  };

  return content;
}

function createEpisodes(number) {
  const episodes = [];
  for (let i = 0; i < number; i++) {
    episodes.push({
      id: uniqueID(),
      title: faker.book.title(),
      genre: faker.helpers.arrayElements([
        "sci-fi",
        "action",
        "horror",
        "adventure",
        "thriller",
        "fantasy",
        "comedy",
      ]),
      description: faker.food.description(),
      thumbnail: faker.image.avatar(),
      weight: uniqueID(),
    });
  }
  return episodes;
}

function createSeasons(number) {
  const seasons = [];
  for (let i = 0; i < number; i++) {
    seasons.push({
      id: uniqueID(),
      title: faker.book.title(),
      episodes: createEpisodes(5),
      weight: uniqueID(),
    });
  }
  return seasons;
}

function generateContent(number) {
  for (let i = 0; i < number; i++) {
    const content = createContent();
    if (content.series) {
      content.seasons = createSeasons(2);
    }
    database["content"].push(content);
  }
  console.log(database.content);
}
function createProfile(userId) {
  database["profiles"].push({
    id: uniqueID(),
    name: faker.person.fullName(),
    profilePic: faker.image.avatar(),
    userId: userId,
  });
}

function createUsers(number) {
  for (let i = 0; i < number; i++) {
    const user = createUser();
    database["users"].push(user);

    createProfiles(3, user.id);
  }
  const userId = uniqueID();
  database["users"].push({
    id: userId,
    firstName: "Pukhraj",
    lastName: "Prajapat",
    email: "pukhraj.prajapat@gmail.com",
    password: "123456",
  });
  createProfiles(3, userId);
}

function createProfiles(number, userId) {
  for (let i = 0; i < number; i++) {
    createProfile(userId);
  }
}

export function createDatabase() {
  //create users and profiles
  createUsers(20);
  generateContent(20);
}
