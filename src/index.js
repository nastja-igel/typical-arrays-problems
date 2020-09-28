
exports.min = function min (array) {
  var min = Math.min(...array);
  return min;
}

exports.max = function max (array) {
  var max = Math.max(...array);
  return max;
}

exports.avg = function avg (array) {
  var average = array.reduce((a, x) => a + x, 0) / array.length;
  return average;
}
