const REDDIT_BASE_PATH = 'http://localhost:8080/api';

function RedditApi () {
  this.getCategories = async () => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/categories`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getCommunities = async () => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/communities`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getCommunitiesFromCategory = async (categoryId) => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/categories/${categoryId}/communities`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getPosts = async () => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/posts`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getPostById = async (postId) => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/posts/${postId}`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getPostsFromCommunity = async (communityId) => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/communities/${communityId}/posts`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.getUsers = async () => {
    try {
      const response = await fetch(`${REDDIT_BASE_PATH}/users`, {});
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };

  this.addPost = async (post) => {
    try {
      const body = {
        ...post
      };

      const response = await fetch(`${REDDIT_BASE_PATH}/posts`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }    
  };
}