// assertions
// assertion for primitives, helper for eqArrays 1/3
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    // console.log("🟢 assertEqual: ", actual, " === ", expected);
    return true;
  } else {
    // console.log("🔴 assertEqual: ", actual, " !== ", expected);
    return false;
  }
};
// assertion helper for full arrays (assertArraysEqual) below 2/3
const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i])) {
      // console.log("🟢 eqArrays: ", arr1, " === ", arr2);
      continue;
    } else {
      equality = false;
      // console.log("🔴 eqArrays: ", arr1, " === ", arr2);
      break;
    }
  }
  return equality;
};
// assertion for full arrays 3/3
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    // console.log("🟢 assertArraysEqual: ", arr1, " === ", arr2);
    return true;
  } else {
    // console.log("🔴 assertArraysEqual: ", arr1, " !== ", arr2);
    return false;
  }
};
// assertion helper for objects below 1/2
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) { // key not equal lengths, false
    // console.log("🔴 eqObjects: ", object1, " !== ", object2);
    return false;
  } else { // keys equal lengths
    let equality = false; // setup equality gates
    for (let key of object1Keys) { // iterate through keys of obj1
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // both values are arrays
        if (object1[key].length !== object2[key].length) { // arrays are diff lengths, false
          // console.log("🔴 eqObjects: ", object1, " !== ", object2);
          return false;
        } else if (!eqArrays(object1[key], object2[key])) { // arrays are same length, but not same values, false
          // console.log("🔴 eqObjects: ", object1, " !== ", object2);
          return false;
        } else if (eqArrays(object1[key], object2[key])) { // arrays are same length and same values, equality is true
          equality = true;
        }
      } else { // both values are not arrays, therefore primitives
        if (!assertEqual(object1[key], object2[key])) { // are the two values the same?
          // console.log("🔴 eqObjects: ", object1, " !== ", object2);
          return false;
        } else {
          equality = true;
        }
      }
    }
    // equality gate is still open? return true
    if (equality) {
      // console.log("🟢 eqObjects: ", object1, " === ", object2);
      return true;
    }
  }
};

// object assertion 2/2

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // this library replaces my solution on line 67
  if (eqObjects(actual, expected)) {
    console.log(`🟢 assertObjectsEqual: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🔴 assertObjectsEqual: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};


// test code below

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(assertObjectsEqual(ab, ba), true); // => true
assertEqual(assertObjectsEqual(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(assertObjectsEqual(cd, dc), true); // => true
assertEqual(assertObjectsEqual(cd, cd2), false); // => false