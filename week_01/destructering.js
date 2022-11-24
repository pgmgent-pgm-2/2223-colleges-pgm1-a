/*
Destructering
Laat toe om waarden uit een array of eigenschappen uit een object uit te pakken in verschillende variabelen
*/
const arr = ['first', 'second', 'third'];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [d, e, f] = arr;
console.log(d, e, f);

let g, h, i;
[g, h, i] = arr;
console.log(g, h, i);

const [,,j] = ['foo', 'bar', 'bas'];
console.log(j);

const [k, ...l] = [1, 2, 3, 4, 5];
console.log(k, l);

const str = 'abcdefghi';
for (let p = 0; p < str.length ; p++) {
  console.log(`Character at ${p} is ${str.charAt(p)}`);
}

// Object destructering
const soccerPlayer = {
  firstName: 'Mercie',
  lastName: 'Hazard',
  nationality: 'Belgian',
  age: 31,
  genderCode: 1,
};

const {firstName, lastName} = soccerPlayer;
console.log(firstName, lastName);

const project = {
  title: 'We Like Graphics Love Programming',
};
const {title: name} = project;
console.log(name);

const settings = {
  isDarkModeOn: true,
  width: 1280,
  height: 720,
};

const { isDarkModeOn, ...dimension} = settings;
console.log(isDarkModeOn, dimension);