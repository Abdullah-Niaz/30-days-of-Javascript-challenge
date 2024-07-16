const value1 = 60;
const value2 = '60';
const value3 = 60;
const value4 = '60';

// == simple compare the value does matter their type 
// === Strictly check the type of variable and then compare
var result = value1 == value2 && value3 === value4;
console.log(result);