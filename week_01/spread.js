/*
Spread
Syntax: ...
Laat to om itereerbare datatypen (array e.d.) te verspreiden
*/

// Spread in Arry Literals
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const fruit = ['apple', 'melon'];
const fruit2 = fruit;
fruit2.push('citroen');
console.log(fruit);
const fruit3 = [...fruit];
fruit3.push('druiven');
console.log(fruit3, fruit);

const arr1 = [9, 8, 7, 6];
const arr2 = [5, 4, 3, 2];
const arrCombined = [...arr1, ...arr2];
console.log(arrCombined);

// Spread in functions
let maxValue = Math.max(1, -2, 345, -2345);
console.log(maxValue);
maxValue = Math.max(...[23, -45, 456, 122, -12]);
console.log(maxValue);
maxValue = Math.max(...arrCombined);
console.log(maxValue);

function sum (a, b, c = 0) {
  return a + b + c;
}
let s = sum(3, 5, -2);
console.log(s);
s = sum(...[2, 4, 5]);
console.log(s);

const dayOfBirth = [1983, 12, 12];
const now = new Date();
console.log(now.toDateString());
const dob = new Date(...[dayOfBirth]);
console.log(dob);