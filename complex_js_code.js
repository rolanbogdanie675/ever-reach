/*
 * Filename: complex_js_code.js
 * Description: This JavaScript file demonstrates a complex code with multiple functionalities.
 */

// Utility function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to generate Fibonacci sequence up to a given number
function fibonacciSequence(n) {
  let sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  
  return sequence;
}

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Array of persons
let people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Alex Johnson", 40)
];

// Printing the names of people over a certain age
const MIN_AGE_THRESHOLD = 30;
console.log("People over 30 years old:");
for (let person of people) {
  if (person.age > MIN_AGE_THRESHOLD) {
    console.log(person.name);
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Example usage of the functions
console.log("Fibonacci sequence up to 10:");
console.log(fibonacciSequence(10));

console.log("Factorial of 6: " + factorial(6));

console.log("Prime numbers up to 20:");
for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Example usage of the Person class
let newPerson = new Person("Sam Johnson", 35);
newPerson.introduce();