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
  let result = 0;
  let sum = 0;

  if(!array || !array.length) {
    return result;
  } else {
    array.forEach(element => {
      result +=element;
    });
  }

  return result / array.length;
}
