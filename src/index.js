
exports.min = function min(array) {
  if (array == null || array.length == []) {
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max(array) {
  if (array == null || array.length == []) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg(array) {
  if (array == null || array.length == []) {
    return 0;
  }
  var sum = 0;
  var count = array.length;
  for (i = 0; i < count; i++) {
    sum += array[i];
  }
  return sum / count;
}