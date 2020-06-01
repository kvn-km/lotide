const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("🟢 assertEqual: ", actual, " === ", expected);
    return true;
  } else {
    console.log("🔴 assertEqual: ", actual, " !== ", expected);
    return false;
  }
};

module.exports = assertEqual;