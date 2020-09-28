
exports.min = function min (array) {
  if (Array.isArray(array)) {
    if (array.length>0) {
      var min = Math.min(...array);
      return min;
    };
  }
   
  return 0;}

exports.max = function max (array) {
  if (Array.isArray(array)) {
    if (array.length>0) {
      var max = Math.max(...array);
      return max;
    };
  }
   
return 0;}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
    if (array.length>0) {
      var average = array.reduce((a, x) => a + x, 0) / array.length;
      return average;
    };
  }
   
return 0;}