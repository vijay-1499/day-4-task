//Do the below programs in anonymous function & IIFE
//1.Print odd numbers in an array
// Anonymous Function
var printOddNumbers = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5]);

//2.Convert all the strings to title caps in a string array;
// Anonymous Function
var titleCaseStrings = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
};

titleCaseStrings(["india", "won", "the", "match"]);

// IIFE
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
})(["india", "won", "the", "match"]);

//3.Sum of all numbers in an array;
// Anonymous Function
var sumArray = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};

sumArray([1, 2, 3, 4, 5]);

// IIFE
(function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]);

//4.Return all the prime numbers in an array;
// Anonymous Function
var getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6]));

// IIFE
var primes = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6]);

console.log(primes);

//5.Return all the palindromes in an array;

// Anonymous Function
var getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};

console.log(getPalindromes(["level", "hello", "noon"]));

// IIFE
var palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(["madam", "hello", "radar"]);

console.log(palindromes);

//6.Return median of two sorted arrays of the same size:

// Anonymous Function
var getMedian = function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(merged.length / 2);
    return (merged.length % 2 === 0) ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
};

console.log(getMedian([1, 3, 5], [2, 4, 6]));

// IIFE
var median = (function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(merged.length / 2);
    return (merged.length % 2 === 0) ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
})([1, 3, 5], [2, 4, 6]);

console.log(median);

//7.Remove duplicates from an array:

// Anonymous Function
var removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
var uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);

//8.Rotate an array by k times:

// Anonymous Function
var rotateArray = function(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
var rotated = (function(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})([1, 2, 3, 4, 5], 2);

console.log(rotated);


 
