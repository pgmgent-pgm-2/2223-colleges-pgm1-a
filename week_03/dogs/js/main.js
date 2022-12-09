const GHENT_FOOD_URL = 'https://data.stad.gent/api/records/1.0/search/?dataset=duurzame-voeding-gent&q=';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchFoodData();
    },
    cachElements () {
      console.log('2. Cache Elements.');
      this.$foodList = document.querySelector('.food__list');
    },
    fetchFoodData () {
      console.log('3. Fetch Food Data.');
      /* loadJsonByPromise(GHENT_FOOD_URL).then(
        (data) => {
          const htmlStr = this.getHTMLForFood(data.records);
          this.$foodList.innerHTML = htmlStr;
        }
      ).catch(
        (error) => console.log(error)
      ); */
      fetch(GHENT_FOOD_URL)
        .then((response) => response.json())
        .then((data) => {
          const htmlStr = this.getHTMLForFood(data.records);
          this.$foodList.innerHTML = htmlStr;
        })
        .catch((error) => console.log(error));
    },
    getHTMLForFood (food) {
      return food.map(fd => {
        return `
        <div class="food__list-item">
          <h3 class="title">${fd.fields.titel}</h3>
          <picture class="picture">
            <img src="${fd.fields.teaser_img_url}">
          </picture>
          <p class="text">${fd.fields.teaser_text}</p>
          <a target="_blank" href="${fd.fields.lees_meer}" title="">Meer Info</a>
        </div>
        `;
      }).join('');

      console.log('')
    }
  };
  app.init();
})();