// equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'world';

console.log("Test for equality of strings: I predict False.");
console.log(str1 === str2);

console.log("Test for inequality of strings: I predict True.");
console.log(str1 !== str2);

// the lower case function
let uppercaseStr: string = 'HELLO';

console.log("Test for lowercase conversion: I predict true.");
console.log(uppercaseStr.toLowerCase() === 'hello'); 

// Numerical tests
let num1: number = 5;
let num2: number = 10;

console.log("Numerical equality test: I predict False.")
console.log(num1 === num2);

console.log("Numerical inequality test: I predict True.");
console.log(num1 !== num2)

console.log("Greater than test: I predict False.");
console.log(num1 > num2)

console.log("Less than test: I predict True.")
console.log(num1 < num2)

console.log("Greater than or equal to test: I predict False.")
console.log(num1 >= num2)

console.log("Less than or equal to test: I predict True.");
console.log(num1 <= num2)

// using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

console.log("Test for 'and' operator: I predict False.")
console.log(isSunny && isWarm)

console.log("Test for 'or' operator: I predict True.");
console.log(isSunny || isWarm)

// whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Test if 'apple' is in the array: I predict True.");
console.log(fruits.indexOf('apple') !== -1); 

// item is not in an array
console.log("Test if 'grape' is in the array: I predict False.");
console.log(fruits.indexOf('grape') !== -1);
