// write a arrow function to sum up two number 
const findMaxofTwo = ( a,b ) => {
    return (a > b ? a : b);
}

fmt = findMaxofTwo(2,3);

console.log(fmt);

console.log("\n")
// write a arrow function to sum up three number
const findMaxofThree = ( a,b,c ) => {
    return (a > b && a > c ? a : b > c ? b : c);
}

fmth = findMaxofThree(2,3,4);
console.log(fmth);