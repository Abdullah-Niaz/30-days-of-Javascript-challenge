// take a array from 1 to 5 and log the result 

const arr = [1, 2, 3, 4, 5];

console.log(...arr)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);



const [first, second, ...rest] = arr;
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]
