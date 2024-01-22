// 1 reverse a number
function reverseNumber(num) {
  return parseInt(`${num}`.split("").reverse().join(""));
}

console.log(reverseNumber(1234));
console.log(reverseNumber(57812938));

// 2 alpha order
function alphaOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphaOrder("Keyin College"));
console.log(alphaOrder("elliott"));

// 3 get extension name
function getExtension(file) {
  return file.split(".")[1];
}

console.log(getExtension("text.txt"));
console.log(getExtension("image.jpg"));
console.log(getExtension("script.py"));

// 4 get current date
function getCurrentDate() {
  let date = new Date();
  return date.toLocaleDateString();
}

console.log(getCurrentDate());

// 5 capitalize a string
function capitalize(str) {
  // did not check if first char is uppercase
  // since this will result in the same output either
  let first = str[0].toUpperCase();
  let rest = str.split("").splice(1).join("");

  return first + rest;
}

console.log(capitalize("elliott"));
console.log(capitalize("French"));

// 6 check for period in string
function checkPeriod(str) {
  return str.includes(".") ? "contain period" : "no period";
}

console.log(checkPeriod("elliott.exe"));
console.log(checkPeriod("no period here"));

// 7 add suffix to number
function putSuffix(num) {
  if (`${num}`.endsWith("1") && !`${num}`.endsWith("11")) {
    return `${num}st`;
  } else if (`${num}`.endsWith("2") && !`${num}`.endsWith("12")) {
    return `${num}nd`;
  } else if (`${num}`.endsWith("3") && !`${num}`.endsWith("13")) {
    return `${num}rd`;
  } else if (num !== undefined) {
    return `${num}th`;
  } else {
    return;
  }
}

console.log(putSuffix(13)); // ends in th
console.log(putSuffix(23)); // ends in rd
console.log(putSuffix(22)); // ends in nd
console.log(putSuffix(91)); // end in st
console.log(putSuffix(1100)); // ends in th
console.log(putSuffix()); // returns undefined
