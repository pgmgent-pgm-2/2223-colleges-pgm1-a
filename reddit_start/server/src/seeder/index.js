/*
Import packages
*/
const fs = require('fs');
const path = require('path');
const fetch = require('isomorphic-fetch');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');

/*
Variables
*/
const RANDOM_USER_ME_API = 'https://randomuser.me/api/?results=';
const CATEGORIES = [
  'Popular Communities',
  'Gaming',
  'Sports',
  'TV',
  'Travel',
  'Health & Fitness',
  'Fashion',
  'Aww',
  'Memes',
  'Pics & Gifs',
  'Art & Design',
  'Beauty',
  'Books & Writing',
  'Crypto',
  'Discussion',
  'Finance & Business',
  'Food',
  'Learning',
  'Mindblowing',
  'Outdoors',
  'Parenting',
  'Photography',
  'Relationships',
  'Science',
  'Videos',
  'Vroom',
  'Wholesome',
];

/*
File paths
*/
const filePathCategories = path.join(__dirname, '..', 'data', 'categories.json');
const filePathCommunities = path.join(__dirname, '..', 'data', 'communities.json');
const filePathPosts = path.join(__dirname, '..', 'data', 'posts.json');
const filePathUsers = path.join(__dirname, '..', 'data', 'users.json');
const filePathCommunitiesMembers = path.join(__dirname, '..', 'data', 'communities_members.json');

/*
Utilities
*/
const createBodyForPost = () => {
  let tempStr = '';
  tempStr += `<p>${faker.lorem.paragraphs(1 + Math.round(Math.random() * 5), '</p><p>')}</p>`;
  tempStr += `<img src="https://picsum.photos/600/900?random=${Math.round(Math.random() * 5)}">`;
  tempStr += `<p>${faker.lorem.paragraphs(1 + Math.round(Math.random() * 5), '</p><p>')}</p>`;
  return tempStr;
};

/*
Create users
*/
const createUsers = async (amount) => {
  const url = `${RANDOM_USER_ME_API}${amount}`;

  const response = await fetch(url, {});
  const json = await response.json();
  const randomUsers = json.results;

  const users = randomUsers.map((randomUser) => ({
    id: randomUser.login.uuid,
    username: randomUser.login.username,
    password: 'w84pgm2beGr8',
    picture: randomUser.picture,
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    gender: randomUser.gender,
    dayOfBirth: new Date(randomUser.dob.date).getTime(),
    createdAt: new Date(randomUser.registered.date).getTime(),
    nationality: randomUser.nat,
    cell: randomUser.cell,
    location: {
      city: randomUser.location.city,
      country: randomUser.location.country,
    },
  }));

  return Promise.resolve(users);
};

const createCategories = async () => {
  const categories = [];

  CATEGORIES.forEach((category) => {
    categories.push({
      id: uuidv4(),
      name: category,
      description: faker.lorem.paragraph(1),
      createdAt: Date.now(),
    });
  });

  return Promise.resolve(categories);
};

const createCommunities = async (amount, categories) => {
  const communities = [];

  for (let i = 0; i < amount; i += 1) {
    const id = uuidv4();
    communities.push({
      id,
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(1),
      categoryId: categories[Math.floor(Math.random() * categories.length)].id,
      avatarUrl: `https://robohash.org/${id}?gravatar=hashed`,
      createdAt: Date.now(),
    });
  }

  return Promise.resolve(communities);
};

const createPosts = async (amount, communities, users) => {
  const posts = [];

  for (let i = 0; i < amount; i += 1) {
    posts.push({
      id: uuidv4(),
      title: faker.lorem.sentence(5 + Math.round(Math.random() * 7)),
      body: createBodyForPost(),
      communityId: communities[Math.floor(Math.random() * communities.length)].id,
      userId: users[Math.floor(Math.random() * users.length)].id,
      createdAt: Date.now(),
    });
  }

  return Promise.resolve(posts);
};

const createCommunitiesMembers = async (communities, users) => {
  const cms = [];

  users.forEach((u) => {
    const amount = Math.floor((Math.random() * communities.length) / 2);
    const communitiesCopy = [...communities];
    let i = 1; let
      index = 0;
    while (i <= amount) {
      index = Math.floor(Math.random() * communitiesCopy.length);
      cms.push({
        userId: u.id,
        communityId: communitiesCopy[index].id,
        createdAt: Date.now(),
      });
      communitiesCopy.splice(index, 1);
      i += 1;
    }
  });

  return Promise.resolve(cms);
};

const seed = async () => {
  const users = await createUsers(50);
  fs.writeFileSync(filePathUsers, JSON.stringify(users, null, 2));
  const categories = await createCategories();
  fs.writeFileSync(filePathCategories, JSON.stringify(categories, null, 2));
  const communities = await createCommunities(600, categories);
  fs.writeFileSync(filePathCommunities, JSON.stringify(communities, null, 2));
  const posts = await createPosts(18000, communities, users);
  fs.writeFileSync(filePathPosts, JSON.stringify(posts, null, 2));
  const communitiesMembers = await createCommunitiesMembers(communities, users);
  fs.writeFileSync(filePathCommunitiesMembers, JSON.stringify(communitiesMembers, null, 2));
};

seed();
