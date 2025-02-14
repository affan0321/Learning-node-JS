const lib = require('./library');

const Addition = lib.Add(2, 3)
const Sub = lib.Subtract(20, 10);

console.log(Addition);
console.log(Sub);
console.log(lib.num);

console.log(lib.Car);