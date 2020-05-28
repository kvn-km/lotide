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
  } else {
    // console.log(`❌ Assertion Failed: "${arr1}" !== "${arr2}"`);
  }
};


// find key

function findKey(obj, call) {
  for (let name in obj) {
    if (call(obj[name])) {
      console.log(name);
      break;
    }
  }
}

// test code below

assertEqual(findKey(({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma")); // => "noma"