// String
const name = "Abdullah";
console.log(`Value: ${name}, Type: ${typeof name}`);

// Number
const age = 25;
console.log(`Value: ${age}, Type: ${typeof age}`);

// Boolean
const isStudent = true;
console.log(`Value: ${isStudent}, Type: ${typeof isStudent}`);

// Undefined
let address;
console.log(`Value: ${address}, Type: ${typeof address}`);

// Null
const salary = null;
console.log(`Value: ${salary}, Type: ${typeof salary}`);

// Object
const person = {
  name: "Abdullah",
  age: 25
};
console.log(`Value: ${person.name}, ${person.age}, Type: ${typeof person}`);

// Array
const numbers = [1, 2, 3, 4, 5];
console.log(`Value: ${numbers}, Type: ${typeof numbers}`);

// Function
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(`Value: ${greet("Abdullah")}, Type: ${typeof greet}`);

// Symbol
const symbol = Symbol("unique");
console.log(`Value: ${symbol.toString()}, Type: ${typeof symbol}`);

// BigInt
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(`Value: ${bigIntValue}, Type: ${typeof bigIntValue}`);
