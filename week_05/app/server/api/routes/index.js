/*
Import packages
*/
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const usersJson = require('../../data/users.json');

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
  res.json(usersJson);
});

// Get a specific user by id
router.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const userObj = usersJson.find((obj) => obj.id === userId);

  res.json(userObj);
});

// Create a new user
router.post('/users', (req, res) => {
  const userObj = req.body;
  userObj.createdAt = Date.now();
  userObj.updatedAt = Date.now();
  console.log(req.body);

  res.json(userObj);
});

// Delete a specific user by id
router.delete('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const filteredUsers = usersJson.filter((obj) => obj.id !== userId);

  res.json(filteredUsers);
});

// Update a specific user by id
router.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const userIndex = usersJson.findIndex((obj) => obj.id === userId);

  const userObj = req.body;
  usersJson[userIndex] = {
    ...usersJson[userIndex],
    userObj,
    updatedAt: Date.now()
  }

  res.json(usersJson[userIndex]);
});

// Exports the end points of this route
module.exports = router;