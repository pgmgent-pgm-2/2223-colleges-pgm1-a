/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../../utils');

/*
Get all communities
*/
const getCommunities = (req, res, next) => {
  try {
    // Get communities from service
    const communities = dataService.getCommunities();
    // Send response
    res.status(200).json(communities);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific community
*/
const getCommunityById = (req, res, next) => {
  try {
    // Get communityId parameter
    const { communityId } = req.params;
    // Get specific community from service
    const community = dataService.getCommunityById(communityId);
    // Send response
    res.status(200).json(community);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get all communities from a specific category
*/
const getCommunitiesFromCategory = (req, res, next) => {
  try {
    // Get categoryId parameter
    const { categoryId } = req.params;
    // Get communities from service
    const communities = dataService.getCommunitiesFromCategory(categoryId);
    // Send response
    res.status(200).json(communities);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  getCommunities,
  getCommunityById,
  getCommunitiesFromCategory,
};
