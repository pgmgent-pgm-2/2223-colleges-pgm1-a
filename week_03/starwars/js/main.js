const STAR_WARS_API_URL = 'https://swapi.dev/api/';
const STAR_WARS_PEOPLE_API_URL = `${STAR_WARS_API_URL}/people`;

// Cache Elements
const $swPeopleList = document.querySelector('.sw__people-list');

// Fetch People Data from Star Wars API
const fetchPeopleData = async () => {
  /* fetch(STAR_WARS_PEOPLE_API_URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error)); */
  const response = await fetch(STAR_WARS_PEOPLE_API_URL, { method: 'GET', });
  const data = await response.json();

  updateStarWarsPeopleList(data);
};

const updateStarWarsPeopleList = (data) => {
  $swPeopleList.innerHTML = renderHTMLForStarWarsPeopleList(data.results);
}

const renderHTMLForStarWarsPeopleList = (data) => {
  return data.map((ch) => 
    `
    <div class="sw__people-list-item">
      <h3>${ch.name}</h3>
      <span>${ch.mass}</span>
      <span>${ch.birth_year}</span>
    </div>
    `
  ).join(''); 
}

fetchPeopleData();

/*
"name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            */