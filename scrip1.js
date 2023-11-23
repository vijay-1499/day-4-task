//Do the below programs in arrow functions.
//1.Print odd numbers in an array:

// Arrow Function;
const printOddNumbers = arr => {
    for (const num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5]);

//2.Convert all the strings to title caps in a string array:

// Arrow Function;
const titleCaseStrings = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
};

titleCaseStrings(["india", "won"]);

//3.Sum of all numbers in an array:
// Arrow Function;
const sumArray = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    console.log(sum);
};

sumArray([1, 2, 3, 4, 5]);

//4.Return all the prime numbers in an array:

// Arrow Function;
const getPrimeNumbers = arr => {
    return arr.filter(num => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6]));

//5.Return all the palindromes in an array:
// Arrow Function;
const getPalindromes = arr => {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

console.log(getPalindromes(["madam", "hello", "radar"]));




