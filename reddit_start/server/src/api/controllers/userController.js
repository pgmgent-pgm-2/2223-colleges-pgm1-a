/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../../utils');

/*
Get all users
*/
const getUsers = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

/*
Get a specific user
*/
const getUserById = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

module.exports = {
  getUsers,
  getUserById,
};
