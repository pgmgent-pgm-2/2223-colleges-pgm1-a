const GHENT_FOOD_URL = 'https://data.stad.gent/api/records/1.0/search/?dataset=duurzame-voeding-gent&q=';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
    },
    cachElements () {
      console.log('2. Cache Elements.');
    },
    fetchFoodData () {
      console.log('3. Fetch Food Data.');
    },
  };
  app.init();
})();