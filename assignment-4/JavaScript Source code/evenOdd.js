// Check whether a number is even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is an Even number.`;
    } 
    else {
        return `${num} is an Odd number.`;
    } 
} 

console.log(checkEvenOdd(9));
console.log(checkEvenOdd(18));