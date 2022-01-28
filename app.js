"use strict";

const numAverage = function (numArr) {
  const arrLength = numArr.length;
  let newNum = 0;
  for (let i = 0; i < arrLength; i++) {
    newNum += numArr[i];
  }
  console.log(newNum / arrLength);
};

//numAverage([1, 4, 7]); //  Output: 4
//numAverage([10, 5]); //Output: 7.5
//numAverage([1.5, 3, 2.5, 1]); //Output: 2

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//  (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to
// aid in working through this problem.

const targetArr = function (input, target) {
  if (input.includes(target)) {
    console.log(input.indexOf(target));
  } else {
    console.log(-1);
  }
};

//targetArr([4, 5, 6, 7, 0, 1, 2], 0); //target = 0 Output: 4
//targetArr([4, 5, 6, 7, 0, 1, 2], 3); //target = 3 Output: -1.

// HARD: Create two buttons, one that when clicked turns the background of the body red.
// The other, when clicked, turns the body's background color white.
//  Each of the background colors should be defined as class styles and when the buttons
//  are pushed the body's classList is updated to include the correct class for the background.
// Create a single function that takes an input className and updates the body's
//  classList to ONLY include that className
// *Note: Check Canvas for the starter code needed for this exercise.
//  The starter code will be located in a folder named hard_js.

const redBtn = document.querySelector("#red");
const whiteBtn = document.querySelector("#white");

redBtn.addEventListener("mousedown", function () {
  redBtn.style.backgroundColor = "red";
  redBtn.addEventListener("mouseup", function () {
    redBtn.style.backgroundColor = "black";
  });
});

whiteBtn.addEventListener("mousedown", function () {
  whiteBtn.style.backgroundColor = "white";
  whiteBtn.style.color = "black";
  whiteBtn.addEventListener("mouseup", function () {
    whiteBtn.style.backgroundColor = "black";
    whiteBtn.style.color = "white";
  });
});

redBtn.addEventListener("touchstart", function () {
  redBtn.style.backgroundColor = "red";
  redBtn.addEventListener("touchend", function () {
    redBtn.style.backgroundColor = "black";
  });
});
whiteBtn.addEventListener("touchstart", function () {
  whiteBtn.style.backgroundColor = "white";
  whiteBtn.style.color = "black";
  whiteBtn.addEventListener("touchend", function () {
    whiteBtn.style.backgroundColor = "black";
    whiteBtn.style.color = "white";
  });
});

// *VERY HARD: You are given coins of different denominations and a total amount of money amount.
//  Write a function to compute the fewest number of coins that you need to make up that amount.
//   If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.
//   Do not have anyone give you the answer or solve this problem for you.

const leastCoins = function (coins, target) {
  let sum = 0;
  coins.sort();
  if (sum === target) {
    console.log(sum);
  } else {
    for (let i = 0; i < target; i++) {
      sum += coins[i];
      console.log(sum);
    }
    leastCoins(sum, target);
  }
};
// leastCoins([1, 2, 5], 8);

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3

// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1
