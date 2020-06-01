const eqArrays = (arr1, arr2) => {
  let equality = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      equality = false;
      break;
    }
  }
  return equality;
};

module.exports = eqArrays;