/*
Set

Object een verzameling van unieke waarden van verschillende datatypen
*/
let mySet = new Set();
console.log(mySet);
mySet.add(1);
mySet.add(1);
mySet.add('Pgm');
mySet.add('pgm');
mySet.add(true);
console.log(mySet);
console.log(mySet.size);
let obj = {
  firstName: 'Messi',
};
mySet.add(obj);
mySet.add(obj);
console.log(mySet);
mySet.add({
  firstName: 'Messi',
});
console.log(mySet);
console.log(mySet.has('Pgm'));
console.log(mySet.has('PGM'));
console.log(mySet.has(obj));
console.log(mySet.has(true));
mySet.delete('pgm');
console.log(mySet);
mySet.delete('dv');

// Array to Set
let numbers = [1, 1, 2, 4, 5, 6, 45];
mySet = new Set(numbers);
mySet.add(3);
numbers = [...mySet];
console.log(numbers);

/*
Map

Object dat een verzameling bevat van key / value pairs
*/
let myMap = new Map();
console.log(myMap);
myMap.set(12345, { nickName: 'drdynscript'});
myMap.set(12346, { nickName: 'evaz'});
console.log(myMap);
myMap.set(65433, { nickName: 'Paulette'});
console.log(myMap.size);
console.log(myMap.has(12346));
console.log(myMap.has(666));
obj = {
  firstName: 'Philippe',
  email: 'drdynscript@gmail.com'
};
myMap.set(9999, obj);
obj.email = 'phildp@arteveldehs.be';
console.log(myMap);
myMap.set(7777, { nickName: 'Paulette', email: 'paul.metaverse@meta.com'});
const person = myMap.get(7777);
console.log(person);
person.email = 'p.soep@foody.be';
myMap.set(7777, person);
console.log(myMap);

// Loop with forEach
myMap.forEach((value, key) => {
  console.log(`The key ${key} with value ${value}`);
});

const first = new Map([
  [1, 'Map'],
  [5, 'Slap'],
  [3, 'Eten'],
]);
console.log(first);
const second = new Map([
  [1, 'Judo'],
  [2, 'Sauna'],
  [4, 'Voetbal'],
]);
const merged = new Map([...first, ...second]);
console.log(merged);

// Array from
const content = 'Zij brengt rozen op gerits graf bij vuil grijs weder'
let res = Array.from(content);
res = res.reverse();
console.log(res);

// Every method
const arr3 = [1, 30, 9, 46, 17, 34];
const a = arr3.every(sla => sla < 100);
console.log(a);

