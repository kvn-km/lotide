// assertions
// assertion for primitives, helper for eqArrays 1/3
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("✅ assertEqual");
    return true;
  } else {
    console.log("❌ assertEqual");
    return false;
  }
};
// assertion helper for full arrays (assertArraysEqual) below 2/3
const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i])) {
      console.log("✅ eqArrays");
      continue;
    } else {
      equality = false;
      console.log("❌ eqArrays");
      break;
    }
  }
  return equality;
};
// assertion for full arrays 3/3
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    console.log(`❌ Assertion Failed: "${arr1}" !== "${arr2}"`);
  }
};

// find key by value

const findKeyByValue = function(genres, showValue) {
  let theOutput = undefined;
  for (let show in genres) {
    if (genres[show] === showValue) {
      theOutput = show;
    }
  }
  return theOutput;
};


// testing codes below

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);