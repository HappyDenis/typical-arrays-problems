exports.min = function min(array) {
  let itog = 0;
  if (!array || !array.length) {
      return itog;
  } else {
      array.forEach(element => {
          if (itog > element) {
              itog = element;
          }
      });
  }
  return itog;
}  
exports.max = function max(array) {
  let itog = 0;
  if (!array || !array.length) {
      return itog;
  } else {
      array.forEach(element => {
          if (itog < element) {
              itog = element;
          }
      });
  }
  return itog;
}
exports.avg = function avg(array) {
  let itog = 0;
  if(!array || !array.length) {
    return itog;
  } else {
    array.forEach(element => {
      itog +=element;
    });
  }
  return (itog/array.length);
}