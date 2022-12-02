function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = null;
  this.children = [];

  this.sayHello = () => {
    return `Hi, my name is ${this.firstName} ${this.lastName}`
  }

  this.jump = () => {
    return `Let us jump around. Hell yeah, dance with the devil!`
  }

  this.addChild = (person) => {
    this.children.push(person);
  }
}

const person_01 = new Person('Doku', 'De Pauw');
const person_02 = new Person('Rita', 'De Meue');
const person_03 = new Person('Emiel', 'Salem');

console.log(person_01, person_02);
console.log(person_02.sayHello());

person_02.addChild(person_03);
person_02.addChild(new Person('Anna', 'Salem'));
console.log(person_02);

person_01.age = 38;
console.log(person_01.age);

const j = person_01.jump();
console.log(j);
