// Remove duplicate values from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const numbers = [11, 12, 13, 14, 11, 15, 16, 13, 17, 18, 15, 19, 20, 19];
const uniqueNumbers = removeDuplicates(numbers);

console.log("Original Array:", numbers);
console.log("Unique Array:", uniqueNumbers);

