// JS Assignment 4 (Jan 31)
// Elliott Butt

// 1 greet
function greet(name) {
  return `Welcome ${name}!`;
}

console.log(greet("Chris"));

// 2 greet modified
function greetDefault(name = "Elliott") {
  return `Welcome ${name}!`;
}

console.log(greetDefault());

// 3 calculate area
function calculateArea(r) {
  return Math.PI * r ** 2;
}

console.log(calculateArea(5));

// 4 anon function multiply
const x = function (num1, num2) {
  return num1 * num2;
};

console.log(x(3, 9));

// 5 average function
const average = function (...numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

console.log(average(1, 4, 10, 50));

// 6 number of matches
function findMatches(num, ...numbers) {
  let matches = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] === num ? matches++ : null;
  }

  return matches;
}

console.log(findMatches(10, 23, 34, 654, 10, 234, 10));

// 7 sum or average
function sumOrAvg(condition, ...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  if (condition === 1) {
    return sum;
  } else {
    return sum / numbers.length;
  }
}

console.log(sumOrAvg(1, 7, 8, 9, 10));
console.log(sumOrAvg(0, 7, 8, 9, 10));

// 8 less than 50
function isUnder50(...numbers) {
  let result = true;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 50) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isUnder50(10, 43, 29, 40));

// 9 return number from string
function numberFromString(str) {
  return parseInt(str) ? parseInt(str) : false;
}

console.log(numberFromString("10string"));
console.log(numberFromString("string10"));

// 10 pos, neg, or zero
function isPositive(num) {
  let result;

  if (num < 0) {
    result = "Negative";
  } else if (num > 0) {
    result = "Positive";
  } else {
    result = "Zero";
  }

  return result;
}

console.log(isPositive(0));
console.log(isPositive(-456));
console.log(isPositive(25));
