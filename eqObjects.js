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

// assertion for objects
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let equality = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) { // key not equal lengths, false
    console.log("🔴 1eqObjects: ", object1, " !== ", object2);
    return false;
  } else {
    for (let key of object1Keys) {
      if (!eqArrays(object1[key], object2[key])) {
        console.log("🔴 2eqObjects: ", object1, " !== ", object2);
        equality = false;
        return false;
      } else if (eqArrays(object1[key], object2[key])) {
        equality = true;
      }
    }
    if (equality) {
      console.log("🟢 2eqObjects: ", object1, " === ", object2);;
      return true;
    }
  }
};



// test codes below

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false
console.log("---");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false