const middle = require("../middle");
const assert = require("chai").assert;

// testing code below:

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log("---");
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
// console.log("---");
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]

describe("", () => {

  it("should return an empty array when given an array with a single item", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return an empty array when given an array with two items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the middle-most item in the array, if given an array with an odd number of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return the middle-two items in the array, if given an array with an even number of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

});