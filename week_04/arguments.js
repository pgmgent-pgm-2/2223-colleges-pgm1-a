// Alle argument opvragen uit de commandoregel
console.log(process.argv);
process.argv.forEach((argument, index) => {
  console.log(`The argument on index ${index} is ${argument}`);
});

const argsv = process.argv.slice(2);
argsv.forEach((argument, index) => {
  console.log(`The argument on index ${index} is ${argument}`);
});