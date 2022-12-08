function add (a, b) {
  console.trace();
  return a + b;
}

function average (a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);