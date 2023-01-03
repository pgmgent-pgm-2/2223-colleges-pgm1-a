/*
Import packages
*/
const express = require('express');

/*
Import custom packages
*/
const categoryController = require('../controllers/categoryController');
const communityController = require('../controllers/communityController');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/posts', postController.getPosts);
router.get('/posts/:postId', postController.getPostById);
router.post('/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePost);
router.put('/posts/:postId', postController.updatePost);

router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);

router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.get('/categories/:categoryId/communities', communityController.getCommunitiesFromCategory);

router.get('/communities', communityController.getCommunities);
router.get('/communities/:communityId', communityController.getCommunityById);
router.get('/communities/:communityId/posts', postController.getPostsFromCommunity);

module.exports = router;
