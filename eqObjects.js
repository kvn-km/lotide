// assertions
// assertion for primitives, helper for eqArrays 1/3
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    // console.log("✅ assertEqual");
    return true;
  } else {
    // console.log("❌ assertEqual");
    return false;
  }
};
// assertion helper for full arrays (assertArraysEqual) below 2/3
const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i])) {
      // console.log("✅ eqArrays");
      continue;
    } else {
      equality = false;
      // console.log("❌ eqArrays");
      break;
    }
  }
  return equality;
};
// assertion for full arrays 3/3
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    // console.log(`✅ Assertion Passed: "${arr1}" === "${arr2}"`);
    return true;
  } else {
    // console.log(`❌ Assertion Failed: "${arr1}" !== "${arr2}"`);
    return false;
  }
};
// assertion for objects
const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  let equality = false;
  objKeys1.forEach(key => {
    if (objKeys2.includes(key)) {
      equality = true;
    } else {
      continue;
    }
  });
  if (!equality) {
    // console.log(`❌ Assertion Failed: "${object1}" !== "${object2}"`);
    return false;
  } else {

  }




  // if (equality === true) {
  //   console.log(`✅ Assertion Passed: "${object1}" === "${object2}"`);
  // } else {
  //   console.log(`❌ Assertion Failed: "${object1}" !== "${object2}"`);
  // }
};



// test code below

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, ba); // => true
eqObjects(ab, abc); // => false