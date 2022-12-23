/*
Import packages
*/
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

/*
Reading and writing files
*/
const filePathUsers = path.resolve(__dirname, '..', '..', 'data', 'users.json');

const readDataFromUsersFile = () => {
  const data = fs.readFileSync(filePathUsers, { encoding: 'utf-8', flag: 'r+' });
  const users = JSON.parse(data);

  return users;
}

const writeDataToUsersFile = (data) => {
  fs.writeFileSync(filePathUsers, JSON.stringify(data, null, 2));
}

const filePathPosts = path.resolve(__dirname, '..', '..', 'data', 'posts.json');

const readDataFromPostsFile = () => {
  const data = fs.readFileSync(filePathPosts, { encoding: 'utf-8', flag: 'r+' });
  const posts = JSON.parse(data);

  return posts;
}

const writeDataToPostsFile = (data) => {
  fs.writeFileSync(filePathPosts, JSON.stringify(data, null, 2));
}

/*
Routes for the home end point of the api
*/
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Home Route of the API',
  });
});

// Get all users
router.get('/users', (req, res) => {
  const data = readDataFromUsersFile();
  res.status(200).json(data);
});

// Get a specific user by id
router.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const data = readDataFromUsersFile();
  const userObj = data.find((obj) => obj.id === userId);

  res.status(200).json(userObj);
});

// Create a new user
router.post('/users', (req, res) => {
  const userObj = req.body;
  userObj.id = uuidv4();
  userObj.createdAt = Date.now();
  userObj.updatedAt = Date.now();
  
  const data = readDataFromUsersFile();
  data.push(userObj);
  writeDataToUsersFile(data);

  res.status(200).json(userObj);
});

// Delete a specific user by id
router.delete('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const data = readDataFromUsersFile();
  const filteredUsers = data.filter((obj) => obj.id !== userId);
  writeDataToUsersFile(filteredUsers);

  res.status(200).json(filteredUsers);
});

// Update a specific user by id
router.put('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const data = readDataFromUsersFile();
  const userIndex = data.findIndex((obj) => obj.id === userId);

  const userObj = req.body;
  data[userIndex] = {
    ...data[userIndex],
    ...userObj,
    updatedAt: Date.now()
  }

  writeDataToUsersFile(data);

  res.json(data[userIndex]);
});

// Get all posts
router.get('/posts', (req, res) => {
  const data = readDataFromPostsFile();
  res.status(200).json(data);
});

// Get a specific post by id
router.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  const data = readDataFromPostsFile();
  const postObj = data.find((obj) => obj.id === postId);

  res.status(200).json(postObj);
});

// Create a new post
router.post('/posts', (req, res) => {
  const postObj = req.body;
  postObj.id = uuidv4();
  postObj.createdAt = Date.now();
  postObj.updatedAt = Date.now();
  
  const data = readDataFromPostsFile();
  data.push(postObj);
  writeDataToPostsFile(data);

  res.status(200).json(postObj);
});

// Delete a specific post by id
router.delete('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  const data = readDataFromPostsFile();
  const filteredPosts = data.filter((obj) => obj.id !== postId);
  writeDataToPostsFile(filteredPosts);

  res.status(200).json(filteredPosts);
});

// Update a specific post by id
router.put('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  const data = readDataFromPostsFile();
  const postIndex = data.findIndex((obj) => obj.id === postId);

  const postObj = req.body;
  data[postIndex] = {
    ...data[postIndex],
    ...postObj,
    updatedAt: Date.now()
  }

  writeDataToPostsFile(data);

  res.status(200).json(data[postIndex]);
});

// Exports the end points of this route
module.exports = router;