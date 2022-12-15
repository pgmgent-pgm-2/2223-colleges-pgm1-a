const process = require('process');
console.log(process.env);
process.env.PORT = 8080;
console.log(process.env.PORT);