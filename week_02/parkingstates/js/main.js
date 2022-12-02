const GHENT_REALTIME_PARKINGSTATES_URL = 'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=name&facet=lastupdate&facet=description&facet=categorie';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      // this.loadRealtimeParkingStateData();
      this.fetchRealtimeParkingStateData();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$parkingsList = document.querySelector('.parkings__list');
      console.log(this.$parkingsList);
    },
    fetchRealtimeParkingStateData () {
      loadJSONByCallback(GHENT_REALTIME_PARKINGSTATES_URL,
        (data) => {
          this.$parkingsList.innerHTML = this.getHTMLForParkingStatesData(data);
        },
        (error) => {
          console.log(error);
        });
    },
    loadRealtimeParkingStateData () {
      console.log('3. Load Realtime Parking State Data');
      const xhr = new XMLHttpRequest();
      // Listen to changes in states within the connection
      // xhr.onreadystatechange = () => {
      //   switch (xhr.readyState) {
      //     case 0: default: console.log('UNSENT'); break;
      //     case 1: console.log('OPENED'); break;
      //     case 2: console.log('HEADERS RECEIVED'); break;
      //     case 3: console.log('LOADING'); break;
      //     case 4:
      //       console.log('DATA LOADED');
      //       if (xhr.status === 200) {
      //         console.log('EVERYTHING IS OK');
      //         // Transform Response Text to JSON Literal Object
      //         const data = JSON.parse(xhr.response)
      //         this.$parkingsList.innerHTML = this.getHTMLForParkingStatesData(data);
      //       }
      //       break;
      //   }
      // };
      // Listen to LOAD event within the connection
      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log('EVERYTHING IS OK');
          // Transform Response Text to JSON Literal Object
          const data = JSON.parse(xhr.response)
          this.$parkingsList.innerHTML = this.getHTMLForParkingStatesData(data);
        }
      }
      // Open the connection or tunnel to the resource via an url
      xhr.open('GET', 'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=name&facet=lastupdate&facet=description&facet=categorie');
      // Make a request to a sepecific resource
      xhr.send(null);
    },
    getHTMLForParkingStatesData(data) {
      console.log(data);
      return data.records.map((pg) => {
        return `
          <div class="parking">
            <h3 class="parking__name">${pg.fields.name}</h3>
            <div class="parking__capacity">
              <span class="total">${pg.fields.totalcapacity}</span>
              <span class="available">${pg.fields.availablecapacity}</span>
            </div>
          </div>`;
      }).join('');
    }
  };
  app.init();
})();