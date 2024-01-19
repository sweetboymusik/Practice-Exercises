// JS Assignment 1
// Elliott Butt

// 1
let label = "keyincollege";
let tlg = "ca";
let domainName = label + "." + tlg;

console.log(domainName);

// 2
let isKeyin;

if (domainName === "keyincollege.ca") {
  isKeyin = true;
} else {
  isKeyin = false;
}

console.log(isKeyin);

// 3
let isNotKeyin = !isKeyin;
console.log(isNotKeyin);

// 4
let byte1 = Math.floor(Math.random() * 255);
let byte2 = Math.floor(Math.random() * 255);
let byte3 = Math.floor(Math.random() * 255);
let byte4 = Math.floor(Math.random() * 255);

// 5
let ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(ipAddress);

// 6
function multiTable(num) {
  for (let i = 1; i < 11; i++) {
    console.log(num + " X " + i + " = " + num * i);
  }
}
multiTable(3);
multiTable(8);

// 7
for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else if (i % 2 !== 0) {
    console.log(i + " is odd");
  }
}

// 8
let sum = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("Sum of even numbers between 1 - 100: " + sum);

// 9
function perfectNumber(num) {
  const divisors = [];
  let sum = 0;

  for (let i = 1; i < Math.floor(num / 2) + 1; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  divisors.forEach((div) => {
    sum += div;
  });

  if (num === sum) {
    console.log(num + " is a perfect number!");
  } else {
    console.log(num + " is not a perfect number...");
  }
}

perfectNumber(28);
perfectNumber(496);

// 10
function primeNumber(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i < Math.floor(num / 2) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 1; i < 100; i++) {
  if (primeNumber(i)) {
    console.log(i);
  }
}
