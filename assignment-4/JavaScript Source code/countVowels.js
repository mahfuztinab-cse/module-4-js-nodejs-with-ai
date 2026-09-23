// Count vowels in a string. 

function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0; 

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        } 
    }
    return count;
} 

const inputText = "JavaScript Code Practice";
console.log(`Vowel count in "${inputText}" is : ${countVowels(inputText)}`);