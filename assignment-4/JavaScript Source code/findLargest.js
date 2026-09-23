// Find the largest of three numbers.

function findLargest(x, y, z) {
    if ( x >= y && a >= z) {
        return `${x} is the largest number.`;
    } 
    else if (y >= x && y >= z) {
        return `${y} is the largest number.`;
    } 
    else {
        return `${z} is the largest number.`;
    }  
} 

console.log(findLargest(11, 31, 21));
