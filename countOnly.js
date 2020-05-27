// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// countOnly
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(items, countingItems) {
  const results = {};
  for (let item of items) {
    if (countingItems[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


// test code

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log("---");
assertEqual(result1["Jason"], 1); // => should PASS if correct
assertEqual(result1["Karima"], undefined);  // => should PASS if correct
assertEqual(result1["Fang"], 2);  // => should PASS if correct