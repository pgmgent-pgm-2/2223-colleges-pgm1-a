// Import built-in node.js module fs
// fs => filesystem
const fs = require('fs');

fs.readFile('data/file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Lijst van personen
const persons = [
  {
    firstName: 'Tima',
    lastName: 'Yasul',
    age: 134,
  },
  {
    firstName: 'Sam',
    lastName: 'Korea',
    age: 43,
  },
];

const str = persons.map((person) => `${person.firstName} ${person.lastName}`).join('\n');

fs.writeFile('data/persons.txt', str, (err, result) => {
  if (err) throw err;
  console.log('Your file persons.txt has been saved.');
})