const uppercaseModule = require('./uppercase');
console.log(uppercaseModule.uppercase('TestThisThing'));

console.log(uppercaseModule.a, uppercaseModule.b);

const userModule = require('./users');
console.log(`My name is the ${userModule.getName()}. I live in ${userModule.getLocation()}`);

const configModule = require('./config');
console.log(`Server is running on port ${configModule.PORT}`);

const { HOST, PORT } = require('./config');
console.log(`Server is running on port ${PORT}`);