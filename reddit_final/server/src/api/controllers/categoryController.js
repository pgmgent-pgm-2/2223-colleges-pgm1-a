/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../../utils');

/*
Get all categories
*/
const getCategories = (req, res, next) => {
  try {
    // Get categories from service
    const categories = dataService.getCategories();
    // Send response
    res.status(200).json(categories);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific category
*/
const getCategoryById = (req, res, next) => {
  try {
    // Get categoryId parameter
    const { categoryId } = req.params;
    // Get specific post from service
    const category = dataService.getCategoryById(categoryId);
    // Send response
    res.status(200).json(category);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  getCategoryById,
  getCategories,
};
