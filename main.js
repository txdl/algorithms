'use strict';

function main() {
  console.log('Hello world!');

  var a = 5;
  var b = 3;
  var x = 2;
  var y = 10;

  var arr = [1, 3, 6, 2, 9, 7, 8, 4, 10, 5];

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
  return a + b;
};

// make a function that subtracts one number from the other
// bonus: Always subtract the smaller number from the bigger one
function subtract(a, b) {
  return a - b;
};

// make a function that multiplies two numbers without using "*" "/"
// hint: use a for loop
function multiply(a, b) {
  var ans = 0;

  for (var i = 0; i < b; i++) {
    ans += a;
  }

  return ans;
};

// make a function that divides one number from the other
// bonus: find the remainder with the "%" operator (called modulo)
function divide(a, b) {
  var ans = 0;

  for (var i = 0; i < a; i++) {
    ans += b
    
    if (ans > a) i--;

    if (ans >= a) {
      ans = i + 1;
      break;
    }
  }

  console.log('Remainder: ' + a % b);
  return ans;
};

// multiply "a" times itself, "b" times 
function power(a, b) {
  var ans = a;

  if (b === 0) return 1;

  for (var i = 1; i < b; i++) {
    ans *= a;
  } 

  return ans;  
};

// sum all the number in an array
// hint: use a for loop
function sum(arr) {
  var ans = 0;

  for (var i = 0; i < arr.length; i++) {
    ans += arr[i];
  }

  return ans;  
};

// sort the array (you choose whether it's ascending or descending)
// this one's going to be tough
function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var k = arr[i];
    
    for (var j = i; j > 0 && k < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = k;
  }

  return arr; 
};

// search for a specific number x in an ordered array
// use your sort algorithm sort the array first!
function search(x, arr) {
  arr = sort(arr);

  var mid;
  var lo = arr[0];
  var hi = arr.length - 1;
 
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
 
    if (arr[mid] > x) {
      hi = mid - 1;
    } else if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
};

// transform a base-10 number into a binary string
// use y.toString(2) to verify your answer 
function toBinary(y) {
  var binaryString = '';

  while (y >= 1) {
    if (y % 2) {
      binaryString = '1' + binaryString;
      y = y - 1;
      if (y === 0) break;
    } else {
      binaryString = '0' + binaryString;
    }

    y = y/2;
  }

  return binaryString;
}

// add two binary numbers
function binaryAdd(a, b) {
  return null;  
};

// subtract one binary number from another
function binarySubtract(a, b) {
  return null;  
};
