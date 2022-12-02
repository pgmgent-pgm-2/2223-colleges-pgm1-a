class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello () {
    return `Hi, my name is ${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor (firstName, lastName, studentNumber) {
    super(firstName, lastName);
    this.studentNumber = studentNumber;
  }
}

const person_01 = new Person('Mira', 'De Pauw');
console.log(person_01);
console.log(person_01.sayHello());

const student_01 = new Student('Robin', 'De Smedt', 64572);
console.log(student_01);
console.log(student_01.sayHello());