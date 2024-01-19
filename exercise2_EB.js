// 1 area of a circle
function areaOfCircle(r) {
  return Math.PI * r * r;
}

console.log(areaOfCircle(7));

// 2 rolling dice
function rollDice(sides = 6) {
  let result = Math.floor(Math.random() * sides + 1);
  return result;
}

console.log(rollDice());

// 3 celsius to fahrenheit
function celsiusToFahrenheit(cel) {
  return cel * (9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));

// 4 f or c
function convertDegrees(deg, type) {
  if (type === "F") {
    return (deg - 32) * (5 / 9);
  } else if (type === "C") {
    return deg * (9 / 5) + 32;
  } else {
    return "invalid degree type";
  }
}

console.log(convertDegrees(0, "F"));

// 5 under 50, any number of args
function isUnder50(...values) {
  let result = true;

  for (let i = 0; i < values.length; i++) {
    if (values[i] >= 50) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isUnder50(10, 12, 51));

// 6 return sum
function summed() {
  let totalSum = 0;

  for (let i = 0; i < arguments.length; i++) {
    totalSum += arguments[i];
  }

  return totalSum;
}

console.log(summed(2, 14, 2, 13, 24));

// 7 if multiple of 3
function isMultipleOf3(num) {
  return num % 3 === 0;
}

console.log(isMultipleOf3(9));
console.log(isMultipleOf3(8));
console.log(isMultipleOf3(15));

// 8 subtract discount from total
function subtractDiscount(total, discount = 0) {
  return total - total * (discount / 100);
}

console.log(subtractDiscount(100));
console.log(subtractDiscount(375, 25));

// 9 seconds returned as string
function formatSeconds(seconds) {
  let days = Math.floor(seconds / 86400);
  let hours = Math.floor((seconds % 86400) / 3600);
  let minutes = Math.floor(((seconds % 86400) % 3600) / 60);

  let output = `${days} Days, ${hours} Hours, ${minutes} minutes`;
  return output;
}

console.log(formatSeconds(4556123));

// 10 modified 9
function formatSeconds2(seconds) {
  let output = "";

  let days = Math.floor(seconds / 86400);
  let hours = Math.floor((seconds % 86400) / 3600);
  let minutes = Math.floor(((seconds % 86400) % 3600) / 60);

  if (days !== 0) {
    output += `${days} Days, `;
  }

  if (hours !== 0) {
    output += `${hours} Hours, `;
  }

  if (minutes !== 0) {
    output += `${minutes} minutes`;
  }

  return output;
}

console.log(formatSeconds2(333350));
