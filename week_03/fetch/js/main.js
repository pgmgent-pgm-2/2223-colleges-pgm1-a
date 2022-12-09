const JSON_API = 'https://jsonplaceholder.typicode.com/posts';

// GET  a list of articles => array of objects
fetch(JSON_API, {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// GET one article = object
fetch(`${JSON_API}/2`, {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// GET comments on article => array of objects
fetch(`${JSON_API}/2/comments`, {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// POST
let data = {
  title: 'Graduaat Programmeren',
  body: 'Lorem ipsizzle dolor sizzle amizzle, fizzle adipiscing elizzle. Nullam cool velizzle, aliquet volutpizzle, suscipit quis, shizzle my nizzle crocodizzle vel, fo shizzle. Pimpin\' own yo\' shut the shizzle up. Sed eros. Tellivizzle izzle dolor dapibizzle turpis tempizzle pimpin\'. Maurizzle phat nibh izzle turpizzle. Dang izzle tortizzle. Pellentesque my shizz rhoncus fo shizzle. In pot habitasse platea dictumst. Check it out fizzle. Fo shizzle tellizzle pizzle, sizzle shiz, gizzle get down get down, break it down shizzlin dizzle, nunc. My shizz suscipizzle. Integizzle gangsta pimpin\' bizzle pizzle.',
  userId: 1,
};

// Create a new record
fetch(JSON_API, {
  method: 'POST',
  body: data
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Change an existing record
data = {
  title: 'Graduaat Programmeren',
  body: 'Lorem ipsizzle dolor sizzle amizzle, fizzle adipiscing elizzle. Nullam cool velizzle, aliquet volutpizzle, suscipit quis, shizzle my nizzle crocodizzle vel, fo shizzle. Pimpin\' own yo\' shut the shizzle up. Sed eros. Tellivizzle izzle dolor dapibizzle turpis tempizzle pimpin\'. Maurizzle phat nibh izzle turpizzle. Dang izzle tortizzle. Pellentesque my shizz rhoncus fo shizzle. In pot habitasse platea dictumst. Check it out fizzle. Fo shizzle tellizzle pizzle, sizzle shiz, gizzle get down get down, break it down shizzlin dizzle, nunc. My shizz suscipizzle. Integizzle gangsta pimpin\' bizzle pizzle.',
  userId: 1,
  id: 1,
};
fetch(JSON_API, {
  method: 'PUT',
  body: data
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Small update of a record
data = {
  title: 'Graduaat Programmeren: The place to be',
  id: 1,
};
fetch(JSON_API, {
  method: 'PATCH',
  body: data
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));