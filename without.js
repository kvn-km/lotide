// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
//   } else {
//     console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
//   }
// };

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

//create without function, new array3 of array1 without things from array2
const without = (sourceArr, removeArr) => {
  // init our new arr3
  let arrWithout = [];

  sourceArr.forEach(sourceElement => {
    // for each element in arr1, see if it's in arr2
    const haveElement = function(element) {
      if (removeArr.indexOf(element) >= 0) {
        return true;
      } else {
        return false;
      }
    };

    // add to arr3 if not in arr2
    if (!haveElement(sourceElement)) {
      arrWithout.push(sourceElement);
    }

  });

  console.log(arrWithout);
};





//testing code below:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"], ["1", "2", "3"]); // => []
without(["1", "2", "3"], ["3", "2", "1"]); // => []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case => hello world
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true