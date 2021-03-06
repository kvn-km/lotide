// assertion for primitives, helper for eqArrays
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};
// assertion helper for full arrays (assertArraysEqual) below
const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i])) {
      continue;
    } else {
      equality = false;
      break;
    }
  }
  return equality;
};
// assertion for full arrays
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    console.log(`❌ Assertion Failed: "${arr1}" !== "${arr2}"`);
  }
};

// letterPositions

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      results[char] ? results[char].push(i) : results[char] = [sentence.indexOf(char)];
    }
  }

  return results;
};

// test code

let results = letterPositions("hello");
console.log(results);
assertArraysEqual(results.h, [0]);
assertArraysEqual(results.e, [1]);
assertArraysEqual(results.l, [2, 3]);
assertArraysEqual(results.o, [4]);
