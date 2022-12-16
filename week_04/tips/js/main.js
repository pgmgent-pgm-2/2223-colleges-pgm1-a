(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.registerListeners();
    },
    cachElements () {
      console.log('2. Cache Elements.');
      this.$formSearch = document.getElementById('frmSearch');
    },
    registerListeners () {
      console.log('3. Register Event Listeners.');
      this.$formSearch.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const searchStr = ev.currentTarget.elements.txtSearch.value;
        this.fetchGitHubUsers(searchStr);
      });
    },
    fetchGitHubUsers (str) {
      console.log(str);
    }
  };
  app.init();
})();

/*
<form action="#" method="post" id="frmSearch">
        <label for="txtSearch">Search</label>
        <input id="txtSearch" name="txtSearch" type="text" placeholder="Search">
        <button type="submit">Search</button>
    </form>
    */