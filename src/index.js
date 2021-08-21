/*jshint esversion: 8 */
exports.min = function min (array) {
  let minNum = 0;
  if (!array) {
    minNum = 0;
  } else {
  for (i = 1; i <= array.length; ++i) {
    if (array[i - 1] < minNum) {minNum = array[i - 1];}
  }}
  return minNum;
};

exports.max = function max (array) {
  let maxNum = 0;
  if (!array) {
    maxNum = 0;
  } else {
  for (i = 1; i <= array.length; ++i) {
    if (array[i - 1] > maxNum) {maxNum = array[i - 1];}
  }}
  return maxNum;
};

exports.avg = function avg (array) {
  let sum = 0;
  let avgNum = 0;
  if (!array) {
    avgNum = 0;
  } else {

  for (i = 0; i < array.length; ++i) {
    sum = sum + array[i];}
  //  );
  
  if (!array.length || array.length === 0) {
    avgNum = 0;
  } else {avgNum = sum / +(array.length);}}
  return avgNum;
    
};
