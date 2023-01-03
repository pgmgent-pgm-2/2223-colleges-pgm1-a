/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../../utils');

/*
Get all posts
*/
const getPosts = (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;
    // Get posts from service
    const posts = dataService.getPosts(itemsPerPage, currentPage);
    // Send response
    res.status(200).json(posts);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get all posts
*/
const getPostsFromCommunity = (req, res, next) => {
  try {
    // Get communityId parameter
    const { communityId } = req.params;
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;
    // Get posts from service
    const posts = dataService.getPostsFromCommunity(communityId, itemsPerPage, currentPage);
    // Send response
    res.status(200).json(posts);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific post
*/
const getPostById = (req, res, next) => {
  try {
    // Get postId parameter
    const { postId } = req.params;
    // Get specific post from service
    const post = dataService.getPostById(postId);
    // Send response
    res.status(200).json(post);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new post
*/
const createPost = (req, res, next) => {
  try {
    // Get body from response
    const post = req.body;
    // Create a post
    const createdPost = dataService.createPost(post);
    // Send response
    res.status(201).json(createdPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete a specific post
*/
const deletePost = (req, res, next) => {
  try {
    // Get postId parameter
    const { postId } = req.params;
    // Delete a post
    const message = dataService.deletePost(postId);
    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update a specific post
*/
const updatePost = (req, res, next) => {
  try {
    // Get postId parameter
    const { postId } = req.params;
    // Update a specific post
    const post = req.body;
    // Update a specific post
    const updatedPost = dataService.updatePost(postId, post);
    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  createPost,
  deletePost,
  getPosts,
  getPostById,
  getPostsFromCommunity,
  updatePost,
};
