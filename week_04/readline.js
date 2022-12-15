const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('What`s your name?', (input) => {
  console.log(input);
  readLine.close();
});