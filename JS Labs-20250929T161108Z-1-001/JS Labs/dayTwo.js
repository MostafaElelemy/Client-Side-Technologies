
// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var str = "258.90";
var intValue = parseInt(str);
var floatValue = parseFloat(str);
console.log(intValue);
console.log(floatValue);



// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var num = 7.45678;
var formatted = num.toFixed(2);
var backNum = parseFloat(formatted);
console.log(formatted);
console.log(backNum);


// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
var x = 'abc';
console.log(isNaN(x));
var num = 12213;
console.log(isNaN(num));

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log((0.1 + 0.2).toFixed(1));


// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function safeParseInt(str) {
    var safely = str.trim();
    if (/^\d+/.test(safely)) {
        return parseInt(safely);
    }
    return null;
}
console.log(safeParseInt(str))


// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value) {
    return typeof value === "number" && !isNaN(value) && value !== Infinity && value !== -Infinity;
}

console.log(isFiniteNumber(1252323));
console.log(isFiniteNumber(-122343));
console.log(isFiniteNumber(0));
console.log(isFiniteNumber(3.142323));
console.log(isFiniteNumber("12344223"));
console.log(isFiniteNumber(NaN));
console.log(isFiniteNumber(Infinity));
console.log(isFiniteNumber(null));


// 7. Remove leading and trailing spaces from the string "   hello world  ".
var str = "                           hello world                                    ";
str = str.trim();
console.log(str);

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
var x = "javascript";
var sub1 = x.slice(4, 10);
var sub2 = x.substring(4, 10);
console.log(sub1);
console.log(sub2);

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
var text = "BananaAAAA Mania";
var count = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 'a') {
        count++;
    }
}
console.log(count);

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
    var reversed = '';
    for (var i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeWords("hellooooooooooo"));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
function extractDomain(url) {
    var start = url.indexOf("//") + 2;
    var end = url.indexOf("/", start);
    return url.slice(start, end);
}
console.log(extractDomain("https://example.com/path/to/page"));

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var found = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}
console.log(naiveIndexOf("helloooooooooooooo", "oooooo"));


// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; if (s.toUpperCase() === 'HELLO') { console.log('match'); }  // Fix: use === and () for function call.

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
console.log(arr);


// 16. Remove the last element and store it. Remove the first element and store it.
var lastElement = arr.pop();
var firstElement = arr.shift();
console.log(lastElement);
console.log(firstElement);

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var originalArray = [10, 20, 30, 40, 50];
var newArray = originalArray.slice(0, 3);
console.log(newArray);

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 2, 'a', 'b');
console.log(spliceArray);

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var demoArray = [1, 2, 3, 4, 5];
var sliced = demoArray.slice(1, 4);
console.log(sliced);
console.log(demoArray);
demoArray.splice(1, 2, 'a', 'b');
console.log(demoArray);

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var sparseArray = [];
sparseArray[7] = 'meem232ee223';
console.log(sparseArray.length);

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            result.push(array[i]);
        }
    }
    return result;
}
var mixArray = [1111, 0, false, 'hello', null, undefined, 4542];
var compactArray = compact(mixArray);
console.log(compactArray);

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(a) {
    var clone = [];
    for (var i = 0; i < a.length; i++) {
        clone[i] = a[i];
    }
    return clone;
}
var originalArray = [15, 23, 34, 42, 533];
var cloneArray = deepClone1D(originalArray);
console.log(cloneArray);


// 23. Map [1,2,3] to their squares using map.
var squares = [1, 2, 3].map(function (n) {
    return n * n;
});
console.log(squares);

// 24. Filter [5,10,15,20] to keep values >= 12.
var filter = [5, 10, 15, 20].filter(function (n) {
    return n >= 12;
});
console.log(filter);

// 25. Reduce [2,4,6] to product.
var product = [2, 4, 6].reduce(function (acc, n) {
    return acc * n;
}, 1);
console.log(product);

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
    return a.reduce(function (acc, n) {
        return acc + n;
    }, 0);
}
function arraySumLoop(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr));
console.log(arraySumLoop(arr));

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
var names = ['Ali', 'Sara', 'Kareem'];
var initials = [];
for (var i = 0; i < names.length; i++) {
    initials.push(names[i].charAt(0));
}
console.log(initials);

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (result.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
    return result;
}
var arrDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];
var uniqueArray = unique(arrDuplicates);
console.log(uniqueArray);

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (var j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
var arr = [1, [2, 3], [4], 5];
var flatArray = flatten1(arr);
console.log(flatArray);

// 31. Create object person with name and age; add a new property city after creation.
var me = {
    name: 'mostafa',
    age: 26
};
me.city = ' 15may';
console.log(me);


// 32. Access a property via bracket notation with a dynamic key variable.
var key = 'age';
console.log(me[key]);

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
console.log(countKeys(me));


// 39. List (as comments) 5 different values that coerce to false in ES5.
//false, 0, "", null, undefined    

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
    return v === true || v === 'true' || v === 1 || v === '1';
}

// 41. Create a Date for Jan 1, 2025 00:00 local.
var date = new Date(2025, 0, 1, 0, 0, 0);

// 42. Get the current year from new Date().
var currentYear = new Date().getFullYear();


// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
    var msPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((d2 - d1) / msPerDay);
}

// 44. Generate a random integer 1..100.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
var num = 4.567;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(getRandomInt(min, max));
    }
    return result;
}
console.log(randomIntArray(5, 13, 20));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
    var items = str.split(';');
    var result = {};
    for (var i = 0; i < items.length; i++) {
        var parts = items[i].split(':');
        result[parts[0]] = parseFloat(parts[1]);
    }
    return result;
}
var priceListStr = "Apple:2.50;Orange:1.75;Banana:3";
console.log(parsePriceList(priceListStr));



// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
    var filtered = mixedArray.filter(function (item) {
        return typeof item === 'number' && isFinite(item);
    });
    return filtered.sort(function (a, b) {
        return a - b;
    });
}
var input = [12, 'a', 23, NaN, 33, Infinity, 44, 55, 'b', 66, null, 77, undefined, 88];
var output = filterAndSortNumbers(input);
console.log(output);    
