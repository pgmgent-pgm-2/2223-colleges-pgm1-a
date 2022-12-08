const isDadHappy = true;

// const willAlwaysBeFulfilled = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Smartphone'), 1000);
// });

// willAlwaysBeFulfilled.then(
//   (data) => console.log(data)
// ).catch(
//   (error) => console.log(error)
// );

willIGetASmartphone = new Promise((resolve, reject) => {
  if (isDadHappy) {
    resolve('Xiaomi 5G');
  }
  reject('GE KRIJGT NIKS');
});

willIGetASmartphone.then(
  (data) => console.log(data)
).catch (
  (error) => console.log(error)
);
