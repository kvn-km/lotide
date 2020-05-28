// declaire a set of words
const words = ["ground", "control", "to", "major", "tom"];
// created a homemade .map function
const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);

console.log(results1);

