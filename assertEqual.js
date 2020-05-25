// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("kevin", "kevin");
assertEqual("kevin", "kim");
assertEqual(13, 13);
assertEqual(13, 13.1);