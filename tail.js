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
  if (arr.length > 0) {
    return arrTail;
  } else {
    for (let i = 1; i < arr.length; i++) {
      arrTail.push(arr[i]);
    }
    return arrTail;
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("kevin", "kevin");
assertEqual("kevin", "kim");
assertEqual(13, 13);
assertEqual(13, 13.1);

// Test Case 1
// const result =  tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1b: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3
const single = ["single"];
const empty = [];
console.log(tail(single)); // should return an empty array
console.log(tail(empty)); // should return an empty array
assertEqual(tail(single).length, 0); // should return pass
assertEqual(tail(empty).length, 0); // should return pass