// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function checkPositiveNegativeZero(n) {
  if (n === 0) {
    console.log("Zero");
  } else if (n < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
checkPositiveNegativeZero(10);

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
let fact = 1;
function factorial(a) {
  for (let i = a; i >= 1; i--) {
    fact = fact * i;
  }
}
factorial(5);
console.log(fact);

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function largerOne(a, b) {
  if (a > b) {
    console.log("Larger :", a);
  } else {
    console.log("Larger :", b);
  }
}
largerOne(50, 40);

// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split("").reverse().join("");

  // Compare the original and reversed strings
  if (cleanStr === reversedStr) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}
isPalindrome("hello");

//Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function printPrimesUpToNumber(upToNumber) {
    if (upToNumber <= 1) {
      console.log("There are no prime numbers less than or equal to 1.");
      return;
    }
    
    const primeNumbers = [];
    
    for (let i = 2; i <= upToNumber; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    
    console.log("Prime numbers less than or equal to", upToNumber, ":");
    console.log(primeNumbers.join(", "));
  }
  
  
  printPrimesUpToNumber(20); 
  printPrimesUpToNumber(0);  
  


//Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.


function simpleCalculator(num1, num2, operator) {
  if (operator === "+") {
    console.log("sum :" ,num1 + num2);
  }else if(operator==="-"){
    console.log("Subtract :" , num1-num2);
  }else if(operator==="*"){
    console.log("Multiplication :",num1*num2)
  }
  else if(operator==="/"){
    console.log("Devide :",num1/num2);
  }
}

simpleCalculator(24, 2,"*");


// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
let count = 0;
function CountNumberOfVowel(str){

    for(let i = 0 ; i<str.length ; i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count++
        }
    }
}
CountNumberOfVowel("aeiouram");
console.log(count);

//Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function getProperDivisorsSum(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  function isPerfectNumber(num) {
    if (num <= 0) {
      return false;
    }
    
    const properDivisorsSum = getProperDivisorsSum(num);
    if(num === properDivisorsSum){
        console.log("it's a perfect Number :",num);
    }
  }
  

  isPerfectNumber(6); 
  isPerfectNumber(28); 


// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
// let f0 = 0 
// let f1 = 1
// fn = fn-1+fn-2
// function Fibonacci(){

// }
// Fibonacci(5);


function generateFibonacciSeries(upToNumber) {
    if (upToNumber <= 0) {
      console.log("Invalid input. Please enter a positive number.");
      return;
    }
  
    let fibonacciSeries = [0, 1];
    let nextNumber = 1;
  
    while (nextNumber <= upToNumber) {
      fibonacciSeries.push(nextNumber);
      nextNumber = fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2];
    }
  
    console.log("Fibonacci Series up to", upToNumber, ":");
    console.log(fibonacciSeries.join(", "));
  }
  
  // Test cases
  generateFibonacciSeries(10); 
  generateFibonacciSeries(0);  
  generateFibonacciSeries(-5); 
  

//Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function Multiplication(n){
    for(let i = 1; i<=n ; i++){
        console.log(n*i);
    }
}
Multiplication(10)




  