(() => {
  const app = {
    initialize () {
      moment.locale('nl-be');
      
      this.redditApi = new RedditApi();

      // tinymce.init({
      //   selector: '#txtBody',
      //   plugins: [
      //     'advlist autolink lists link image charmap print preview anchor',
      //     'searchreplace visualblocks code fullscreen',
      //     'insertdatetime media table paste imagetools wordcount'
      //   ],
      //   menubar: false,
      //   toolbar_mode: 'floating',
      //   toolbar: 'undo redo | formatselect | ' +
      //   'bold italic backcolor | alignleft aligncenter ' +
      //   'alignright alignjustify | bullist numlist outdent indent | ' +
      //   'removeformat | help | link image |',
      //   content_style: 'body { font-family:"Source Sans Pro", sans-serif; font-size:16px }'
      // });
    },
    cacheElements () {
      this.$categoriesList = document.querySelector('.categories__list');
      this.$communitiesList = document.querySelector('.communities__list');
      this.$postsList = document.querySelector('.posts__list');
      this.$postDetails = document.querySelector('.post-details');
      this.$frmCUPost = document.querySelector('#frmCUPost');
      this.$ddlCategories = document.querySelector('#ddlCategories');
      this.$ddlCommunities = document.querySelector('#ddlCommunities');
      this.$btnCreatePost = document.querySelector('.btn-create-post');
      this.$modal = document.querySelector('.modal');
    },
    registerListeners () {      
    },
    async fetchCategories () {     
    },
    setActiveCategory (categoryId) {      
    },
    async fetchCommunitiesFromCategory (categoryId) {
    },
    setActiveCommunity (communityId) {      
    },
    async fetchPostsFromCommunity (communityId) {      
    },
    setActivePost (postId) {      
    },
    async fetchPost (postId) {      
    },    
    async fetchUsers () {      
    },
    setActiveUser (userId) {            
    },
  };
  app.initialize();
})();