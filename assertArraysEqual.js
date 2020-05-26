
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      equality = false;
      break;
    }
  }
  return equality;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    console.log(`❌ Assertion Failed: "${arr1}" !== "${arr2}"`);
  }


};



// testing code below:

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false