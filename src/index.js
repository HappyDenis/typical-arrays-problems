exports.min = function min(array) {
  let result = 0;

  if (!array || !array.length) {
      return result;
  } else {
      array.forEach(element => {
          if (result > element) {
              result = element;
          }
      });
  }
  return result;
}  
exports.max = function max(array) {
  let result = 0;

  if (!array || !array.length) {
      return result;
  } else {
      array.forEach(element => {
          if (result < element) {
              result = element;
          }
      });
  }
  return result;
}
exports.avg = function avg(array) {
  let res = 0;
  let sum = 0;

  if(!array || !array.length) {
    return res;
  } else {
    array.forEach(element => {
      res +=element;
    });
  }
  return res / array.length;
}