// equality and inequality with strings
var str1 = 'hello';
var str2 = 'world';
console.log("Test for equality of strings: I predict False.");
console.log(str1 === str2);
console.log("Test for inequality of strings: I predict True.");
console.log(str1 !== str2);
// the lower case function
var uppercaseStr = 'HELLO';
console.log("Test for lowercase conversion: I predict true.");
console.log(uppercaseStr.toLowerCase() === 'hello');
// Numerical tests
var num1 = 5;
var num2 = 10;
console.log("Numerical equality test: I predict False.");
console.log(num1 === num2);
console.log("Numerical inequality test: I predict True.");
console.log(num1 !== num2);
console.log("Greater than test: I predict False.");
console.log(num1 > num2);
console.log("Less than test: I predict True.");
console.log(num1 < num2);
console.log("Greater than or equal to test: I predict False.");
console.log(num1 >= num2);
console.log("Less than or equal to test: I predict True.");
console.log(num1 <= num2);
// using "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log("Test for 'and' operator: I predict False.");
console.log(isSunny && isWarm);
console.log("Test for 'or' operator: I predict True.");
console.log(isSunny || isWarm);
// whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Test if 'apple' is in the array: I predict True.");
console.log(fruits.indexOf('apple') !== -1);
// item is not in an array
console.log("Test if 'grape' is in the array: I predict False.");
console.log(fruits.indexOf('grape') !== -1);
