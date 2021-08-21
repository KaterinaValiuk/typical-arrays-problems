/*jshint esversion: 8 */
exports.min = function min (array) {
  let minNum = 0;
  for (i = 0; i < array.length; ++i) {
    if (array[i] < minNum) {minNum = array[i];}
  }
  return minNum;
};

exports.max = function max (array) {
  let maxNum = 0;
  for (i = 0; i < array.length; ++i) {
    if (array[i] > maxNum) {maxNum = array[i];}
  }
  return maxNum;
};

exports.avg = function avg (array) {
  let sum = 0;
  //Array.isArray(array) ? sum = 0 : (

  for (i = 0; i < array.length; ++i) {
    sum = sum + array[i];}
  //  );

  let avgNum = sum / array.length;
  return avgNum;
    
};
