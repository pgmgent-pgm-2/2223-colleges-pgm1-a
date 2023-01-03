(() => {
  const app = {
    initialize () {
      moment.locale('nl-be');
      
      this.redditApi = new RedditApi();
      this.users = null;
      this.categories = [];
      this.currentCategoryId = null;
      this.currentCommunityId = null;
      this.currentPostId = null;
      this.currentUserId = null;
      this.cacheElements();
      this.registerListeners();
      this.fetchUsers();
      this.fetchCategories();

      tinymce.init({
        selector: '#txtBody',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste imagetools wordcount'
        ],
        menubar: false,
        toolbar_mode: 'floating',
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help | link image |',
        content_style: 'body { font-family:"Source Sans Pro", sans-serif; font-size:16px }'
      });
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
      this.$categoriesList.addEventListener('click', (ev) => {
        const categoryId = ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id;
        this.fetchCommunitiesFromCategory(categoryId);
        this.setActiveCategory(categoryId);
      });

      this.$communitiesList.addEventListener('click', (ev) => {
        const communityId = ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id;
        this.fetchPostsFromCommunity(communityId);
        this.setActiveCommunity(communityId);
      });

      this.$postsList.addEventListener('click', (ev) => {
        const postId = ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id;
        this.fetchPost(postId);
        this.setActivePost(postId);
      });

      this.$ddlCategories.addEventListener('change', async (ev) => {
        const communities = await this.redditApi.getCommunitiesFromCategory(ev.target.value);
        this.$ddlCommunities.innerHTML = communities.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
      });

      this.$frmCUPost.addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const post = {
          userId: this.currentUserId,
          communityId: this.$ddlCommunities.value,
          title: ev.target['txtTitle'].value,
          body: ev.target['txtBody'].value,
        }
        
        await this.redditApi.addPost(post);
      });

      this.$btnCreatePost.addEventListener('click', (ev) => {
        ev.preventDefault();
        this.$modal.classList.toggle('modal--isopen');
      });
    },
    async fetchCategories () {
      this.categories = await this.redditApi.getCategories();      
      this.$categoriesList.innerHTML = this.categories.map(c => `<li class="categories__list-item"><a href="#" data-id="${c.id}"><span class="name">${c.name}</span></a></li>`).join('');
      this.$ddlCategories.innerHTML = this.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

      const categoryId = this.categories[0].id;      
      this.fetchCommunitiesFromCategory(categoryId);      
      this.setActiveCategory(categoryId);
    },
    setActiveCategory (categoryId) {
      this.currentCategoryId = categoryId;

      const $selectedCategory = this.$categoriesList.querySelector(`.categories__list-item.selected`);
      if ($selectedCategory) {
        $selectedCategory.classList.remove('selected')
      }
      this.$categoriesList.querySelector(`.categories__list-item > a[data-id="${categoryId}"]`).parentNode.classList.add('selected');
      document.querySelector('.categories .amount').innerHTML = `<span>${this.categories.length}</span>`;
    },
    async fetchCommunitiesFromCategory (categoryId) {
      this.communities = await this.redditApi.getCommunitiesFromCategory(categoryId);      
      this.$communitiesList.innerHTML = this.communities.map(c => `<li class="communities__list-item"><a href="#" data-id="${c.id}"><img class="picture" src="${c.avatarUrl}"><span class="name">${c.name}</span></a></li>`).join('');

      const communityId = this.communities[0].id;      
      this.fetchPostsFromCommunity(communityId);      
      this.setActiveCommunity(communityId);
    },
    setActiveCommunity (communityId) {
      this.currentCommunityId = communityId;

      const $selectedCommunity = this.$communitiesList.querySelector(`.communities__list-item.selected`);
      if ($selectedCommunity) {
        $selectedCommunity.classList.remove('selected')
      }
      this.$communitiesList.querySelector(`.communities__list-item > a[data-id="${communityId}"]`).parentNode.classList.add('selected');
      document.querySelector('.communities .amount').innerHTML = `<span>${this.communities.length}</span>`;
    },
    async fetchPostsFromCommunity (communityId) {
      this.posts = await this.redditApi.getPostsFromCommunity(communityId);      
      this.$postsList.innerHTML = this.posts.map(p => `<li class="posts__list-item"><a href="#" data-id="${p.id}"><span class="name">${p.title}</span></a></li>`).join('');

      const postId = this.posts[0].id;      
      this.fetchPost(postId);
      this.setActivePost(postId);
    },
    setActivePost (postId) {
      this.currentPostId = postId;

      const $selectedPost = this.$postsList.querySelector(`.posts__list-item.selected`);
      if ($selectedPost) {
        $selectedPost.classList.remove('selected')
      }
      this.$postsList.querySelector(`.posts__list-item > a[data-id="${postId}"]`).parentNode.classList.add('selected');
      document.querySelector('.posts .amount').innerHTML = `<img src=${this.communities.find(c => c.id === this.currentCommunityId).avatarUrl}><span>${this.posts.length}</span>`;
    },
    async fetchPost (postId) {
      const post = await this.redditApi.getPostById(postId);   
      const user = this.users.find(u => u.id === post.userId);   
      const community = this.communities.find(c => c.id === post.communityId);   
      const category = this.categories.find(c => c.id === community.categoryId);   
      this.$postDetails.innerHTML = `
        <h3 class="post-details__heading">${post.title}</h3>
        <section class="post-details__meta">  
          <div class="post-details__community">
            <img class="picture" src="${community.avatarUrl}">
            <span class="name">r/${community.name}</span>
            <span class="category">${category.name}</span>
          </div>        
          <div class="post-details__user">
            <img class="picture" src="${user.picture.thumbnail}">
            <span class="name">u/${user.username}</span>
          </div> 
          <div class="post-details__date">
            ${moment(post.createdAt).fromNow()}
          </div>          
        </section>
        <section class="post-details__body">
          ${post.body}
        </section>
      `;
    },    
    async fetchUsers () {
      this.users = await this.redditApi.getUsers();
      this.setActiveUser(this.users[0].id);
    },
    setActiveUser (userId) {
      this.currentUserId = userId;      
    },
  };
  app.initialize();
})();