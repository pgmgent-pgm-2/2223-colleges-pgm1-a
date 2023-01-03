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

/*
Read and write data
*/
const readDataFromCategoriesFile = () => {
  const data = fs.readFileSync(filePathCategories, { encoding: 'utf8', flag: 'r' });
  const categories = JSON.parse(data);

  return categories;
};

const readDataFromCommunitiesFile = () => {
  const data = fs.readFileSync(filePathCommunities, { encoding: 'utf8', flag: 'r' });
  const communities = JSON.parse(data);

  return communities;
};

const readDataFromPostsFile = () => {
  const data = fs.readFileSync(filePathPosts, { encoding: 'utf8', flag: 'r' });
  const posts = JSON.parse(data);

  return posts;
};

const readDataFromUsersFile = () => {
  const data = fs.readFileSync(filePathUsers, { encoding: 'utf8', flag: 'r' });
  const users = JSON.parse(data);

  return users;
};

/*
Get all posts
*/
const getPosts = (itemsPerPage, currentPage) => {
  try {
    // Read the posts.json file
    let posts = readDataFromPostsFile();
    if (itemsPerPage && currentPage) {
      posts = convertArrayToPagedObject(posts, itemsPerPage, currentPage);
    }
    return posts;
  } catch (error) {
    throw new HTTPError('Can\'t get posts!', 500);
  }
};

/*
Get a specific post
*/
const getPostById = (id) => {
  try {
    // Read the posts.json file
    const posts = readDataFromPostsFile();
    // Find a specific post
    const post = posts.find((article) => article.id === id);
    if (!post) {
      throw new HTTPError(`Cant't find the post with id ${id}!`, 404);
    }
    return post;
  } catch (error) {
    throw error;
  }
};

/*
Get all posts from a specific community
*/
const getPostsFromCommunity = (communityId, itemsPerPage, currentPage) => {
  try {
    // Read the posts.json file
    let posts = readDataFromPostsFile();
    posts = posts.filter((p) => p.communityId === communityId);
    if (itemsPerPage && currentPage) {
      posts = convertArrayToPagedObject(posts, itemsPerPage, currentPage);
    }
    return posts;
  } catch (error) {
    throw new HTTPError(`Can't get posts from the community with id ${communityId}!`, 500);
  }
};

/*
Create a new post
*/
const createPost = (post) => {
  try {
    // Read the posts.json file
    const posts = readDataFromPostsFile();
    // Create a post
    const postToCreate = {
      ...post,
    };
    postToCreate.id = uuidv4();
    postToCreate.createdAt = Date.now();
    postToCreate.publishedAt = Date.now();
    posts.push(postToCreate);
    // Write posts array to the news.json file
    fs.writeFileSync(filePathPosts, JSON.stringify(posts, null, 2));
    return postToCreate;
  } catch (error) {
    throw new HTTPError('Cant\'t create a new post!', 501);
  }
};

/*
Delete a specific post
*/
const deletePost = (id) => {
  try {
    // Read the posts.json file
    const posts = readDataFromPostsFile();
    // Find the index of the post we want to remove
    const findIndex = posts.findIndex((post) => post.id === id);
    if (findIndex === -1) {
      throw new HTTPError(`Cant't find the post with id ${id}!`, 404);
    }
    posts.splice(findIndex, 1);
    // Write posts array to the news.json file
    fs.writeFileSync(filePathPosts, JSON.stringify(posts, null, 2));
    // Send response
    return {
      message: `Successful deleted the post with id ${id}!`,
    };
  } catch (error) {
    throw error;
  }
};

/*
Update a specific post
*/
const updatePost = (id, post) => {
  try {
    const postToUpdate = {
      ...post,
    };
    postToUpdate.modifiedAt = Date.now();

    // Read the posts.json file
    const posts = readDataFromPostsFile();
    // Find the index of the post we want to remove
    const findIndex = posts.findIndex((article) => article.id === id);
    if (findIndex === -1) {
      throw new HTTPError(`Cant't find the post with id ${id}!`, 404);
    }
    posts[findIndex] = {
      ...posts[findIndex],
      ...postToUpdate,
    };
    // Write posts array to the news.json file
    fs.writeFileSync(filePathPosts, JSON.stringify(posts, null, 2));
    // Send response
    return posts[findIndex];
  } catch (error) {
    throw error;
  }
};

/*
Get all users
*/
const getUsers = (itemsPerPage, currentPage) => {
  try {
    // Read the posts.json file
    let users = readDataFromUsersFile();
    if (itemsPerPage && currentPage) {
      users = convertArrayToPagedObject(users, itemsPerPage, currentPage);
    }
    return users;
  } catch (error) {
    throw new HTTPError('Can\'t get users!', 500);
  }
};

/*
Get a specific user
*/
const getUserById = (id) => {
  try {
    // Read the users.json file
    const users = readDataFromUsersFile();
    // Find a specific user
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new HTTPError(`Cant't find the user with id ${id}!`, 404);
    }
    return user;
  } catch (error) {
    throw error;
  }
};

/*
Get all categories
*/
const getCategories = () => {
  try {
    // Read the categories.json file
    const categories = readDataFromCategoriesFile();
    categories.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return categories;
  } catch (error) {
    throw new HTTPError('Can\'t get categories!', 500);
  }
};

/*
Get a specific category
*/
const getCategoryById = (id) => {
  try {
    // Read the categories.json file
    const categories = readDataFromCategoriesFile();
    // Find a specific category
    const category = categories.find((c) => c.id === id);
    if (!category) {
      throw new HTTPError(`Cant't find the category with id ${id}!`, 404);
    }
    return category;
  } catch (error) {
    throw error;
  }
};

/*
Get all communities
*/
const getCommunities = () => {
  try {
    // Read the communities.json file
    const communities = readDataFromCommunitiesFile();
    return communities;
  } catch (error) {
    throw new HTTPError('Can\'t get communities!', 500);
  }
};

/*
Get a specific community
*/
const getCommunityById = (id) => {
  try {
    // Read the communities.json file
    const communities = readDataFromCommunitiesFile();
    // Find a specific category
    const community = communities.find((c) => c.id === id);
    if (!community) {
      throw new HTTPError(`Cant't find the community with id ${id}!`, 404);
    }
    return community;
  } catch (error) {
    throw error;
  }
};

/*
Get a communities from a specific category
*/
const getCommunitiesFromCategory = (categoryId) => {
  try {
    // Read the communities.json file
    const communities = readDataFromCommunitiesFile();
    // Find a specific category
    const selectedCommunities = communities.filter((community) => community.categoryId === categoryId);
    if (!selectedCommunities) {
      throw new HTTPError(`Cant't find the communties from the category with id ${categoryId}!`, 404);
    }
    selectedCommunities.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return selectedCommunities;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPost,
  deletePost,
  getCategoryById,
  getCategories,
  getCommunityById,
  getCommunities,
  getCommunitiesFromCategory,
  getPosts,
  getPostById,
  getPostsFromCommunity,
  getUsers,
  getUserById,
  updatePost,
};
