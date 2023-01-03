/*
Import custom packages
*/
const dataService = require('../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../utils');

/*
Get Home Render
*/
const getHome = (req, res, next) => {
  try {
    // Get posts from service
    let posts = dataService.getPosts();
    posts = posts.slice(0, 3);
    // Send response
    res.render('index', {
      posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  getHome,
};
