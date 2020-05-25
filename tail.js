// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(arr) {
  let arrTail = [];
  for (let i = 1; i < arr.length; i++) {
    arrTail.push(arr[i]);
  }

  return arrTail;
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("kevin", "kevin");
assertEqual("kevin", "kim");
assertEqual(13, 13);
assertEqual(13, 13.1);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!