// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// countLetters

const countLetters = function(sentence) {
  let lettersCount = {};
  for (let char of sentence) {
    if (char !== " ") {
      lettersCount[char] ? lettersCount[char] += 1 : lettersCount[char] = 1;
    }
  }
  return lettersCount;
};

// Test Code
let result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);
