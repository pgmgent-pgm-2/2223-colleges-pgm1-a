const GHENT_DOGS_URL = 'https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=10000&facet=soort&facet=bestaand';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchDogsData();
    },
    cachElements () {
      console.log('2. Cache Elements.');
      this.$dogsPlaces = document.querySelector('.dogs__places');
    },
    fetchDogsData () {
      console.log('3. Fetch Dogs Data.');
      loadJsonByPromise(GHENT_DOGS_URL)
        .then((data) => {
          console.log(data);
          const htmlStr = this.getHTMLForDogsData(data.records);
          this.$dogsPlaces.innerHTML = htmlStr;
        })
        .catch((error) => console.log(error));
    },
    getHTMLForDogsData(data) {
      return data.map((place) => {
        return `
        <div class="dogs__place">
          <h4 class="street">${place.fields.straat}</h4>
          <span class="type">${place.fields.soort}</span>
        </div>
      `}).join('');
    }
  };
  app.init();
})();