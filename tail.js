const tail = function(arr) {
  let arrTail = [];
  if (arr.length <= 1) {
    return arrTail;
  } else {
    for (let i = 1; i < arr.length; i++) {
      arrTail.push(arr[i]);
    }
    return arrTail;
  }
};

module.exports = tail;