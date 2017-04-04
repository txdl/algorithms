'use strict';

function main() {
  console.log('Hello world!');

  var a = 0;
  var b = 0;
  var x = 0;
  var y = 0;

  var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var aString = a.toString();
  var bString = b.toString();
  var xString = x.toString();
  var yString = y.toString();

  console.log(aString + ' + ' + bString + ' = ' + add(a, b));

  console.log(aString + ' - ' + bString + ' = ' + subtract(a, b));

  console.log(aString + ' * ' + bString + ' = ' + multiply(a, b));

  console.log(aString + ' / ' + bString + ' = ' + divide(a, b));

  console.log(aString + '^' + bString + ' = ' + power(a, b));

  console.log('sum(' + arr.toString() + ')' + ' = ' + sum(arr));

  console.log('search(' + xString + ', ' + arr.toString() + ')' + ' = ' + search(x, arr));

  console.log('sort(' + arr.toString() + ')' + ' = ' + sort(arr));

  console.log(yString + ' = ' + toBinary(y));

  console.log(toBinary(a) + ' + ' + toBinary(b) + ' = ' + binaryAdd(a, b));

  console.log(toBinary(a) + ' - ' + toBinary(b) + ' = ' + binarySubtract(a, b));
}

// make a function that adds two numbers together 
function add(a, b) {
  return null;
};

// make a function that subtracts one number from the other
// bonus: Always subtract the smaller number from the bigger one
function subtract(a, b) {
  return null;
};

// make a function that multiplies two numbers without using "*" "/"
// hint: use a for loop
function multiply(a, b) {
  return null;
};

// make a function that divides one number from the other
// bonus: find the remainder with the "%" operator (called modulo)
function divide(a, b) {
  return null;
};

// multiply "a" times itself, "b" times 
function power(a, b) {
  return null;  
};

// sum all the number in an array
// hint: use a for loop
function sum(arr) {
  return null;  
};

// sort the array (you choose whether it's ascending or descending)
// this one's going to be stuff
function sort(arr) {
  return null;  
};

// search for a specific number x in an ordered array
// use your sort algorithm sort the array first!
function search(x, arr) {
  return null;  
};

// transform a base-10 number into a binary string
// use y.toString(2) to verify your answer 
function toBinary(y) {
  return null;
}

// add two binary numbers
function binaryAdd(a, b) {
  return null;  
};

// subtract one binary number from another
function binarySubtract(a, b) {
  return null;  
};
