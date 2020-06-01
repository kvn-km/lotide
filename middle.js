
// const assertEqual = require("./assertEqual");
// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const middle = function(arr) {
  let middleArr = [];
  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 !== 0) {
    const middleIndex = Math.round((arr.length - 1) / 2);
    middleArr.push(arr[middleIndex]);
    return middleArr;
  } else if (arr.length % 2 === 0) {
    const middleIndex = Math.round((arr.length - 1) / 2);
    middleArr.push(arr[middleIndex - 1], arr[middleIndex]);
    return middleArr;
  }
};

module.exports = middle;