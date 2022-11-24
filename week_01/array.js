/* 
Recap Arrays
*/
const fruit = [
  'appel',
  'peer',
  'aardbei',
  'kiwi',
  'sinaasappel',
];
let f = fruit[1];
f = fruit[fruit.length - 1];
console.log(f);
// Add an element
fruit.push('tomaat');
fruit.splice(1, 0, 'banaan');
fruit.unshift('mango');
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.pop();
const myFavoFruit = fruit.slice(3, 5);
console.log(myFavoFruit);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arrCombined = arr1.concat(arr2);
console.log(arrCombined);

const words = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'PHP',
  'SASS',
];
for (let i = 0; i < words.length; i++) {
  console.log(`This is element ${i} with value ${words[i]}`);
}

const students = [
  {
    firstName: 'Bilal',
    lastName: 'Hadsu',
    age: 32,
  },
  {
    firstName: 'Tiba',
    lastName: 'Abbas',
    age: 22,
  },
];
students.push({
  firstName: 'Kescha',
  lastName: 'Pears',
  age: 67,
});
console.log(students);
for(let student of students) {
  console.log(`
  Name: ${student.firstName} ${student.lastName}
  Age: ${student.age}
  ----------------------------------------------
  `);
}
const studensAsString = students.map((student, index) => {
  return `
  Name: ${student.firstName} ${student.lastName}
  Age: ${student.age}
  ----------------------------------------------
  `;
}).join('\n');
console.log(studensAsString);

const yougMindedStudents = students.filter((student) => student.age > 40);
console.log(yougMindedStudents);

const genZ = students.filter((student) => student.age < 26);
console.log(genZ);