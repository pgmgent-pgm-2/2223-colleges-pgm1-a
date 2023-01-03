/*
Import packages
*/
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/*
Import custom packages
*/
const { HTTPError, convertArrayToPagedObject } = require('../utils');

/*
File paths
*/
const filePathCategories = path.join(__dirname, '..', 'data', 'categories.json');
const filePathCommunities = path.join(__dirname, '..', 'data', 'communities.json');
const filePathPosts = path.join(__dirname, '..', 'data', 'posts.json');
const filePathUsers = path.join(__dirname, '..', 'data', 'users.json');

module.exports = {  
};
