
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

// middle

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



// testing code below:

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log("---");
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log("---");
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]