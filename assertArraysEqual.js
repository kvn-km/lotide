const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    // console.log("🟢 assertArraysEqual: ", arr1, " === ", arr2);
    return true;
  } else {
    // console.log("🔴 assertArraysEqual: ", arr1, " !== ", arr2);
    return false;
  }
};

module.exports = assertArraysEqual;