/*
  filename: sophisticated_calculator.js

  This code is a sophisticated calculator that performs various mathematical operations.
  It supports addition, subtraction, multiplication, division, exponentiation, and modulo.
  It also includes a recursive factorial function and a logarithm function.
  The code is structured using JavaScript classes.
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  reset() {
    this.result = 0;
  }

  add(...numbers) {
    for (const num of numbers) {
      this.result += num;
    }
    return this;
  }

  subtract(...numbers) {
    for (const num of numbers) {
      this.result -= num;
    }
    return this;
  }

  multiply(...numbers) {
    for (const num of numbers) {
      this.result *= num;
    }
    return this;
  }

  divide(...numbers) {
    for (const num of numbers) {
      if (num !== 0) {
        this.result /= num;
      } else {
        throw new Error('Cannot divide by zero');
      }
    }
    return this;
  }

  modulo(dividend, divisor) {
    this.result = dividend % divisor;
    return this;
  }

  exponentiate(base, exponent) {
    this.result = Math.pow(base, exponent);
    return this;
  }

  factorial(n) {
    if (n === 0) {
      this.result = 1;
    } else {
      this.result = n * this.factorial(n - 1);
    }
    return this;
  }

  logarithm(base, number) {
    this.result = Math.log(number) / Math.log(base);
    return this;
  }
}

// Usage example:

const calculator = new Calculator();

calculator.add(5, 10, 2).subtract(3, 1).multiply(2).divide(4).exponentiate(2, 3);
console.log('Result:', calculator.result);

calculator.reset();

calculator.factorial(5);
console.log('Factorial of 5:', calculator.result);

calculator.reset();

calculator.logarithm(10, 100);
console.log('Logarithm base 10 of 100:', calculator.result);
