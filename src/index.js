
exports.min = function min (array) {
  if (array === undefined || array.length == 0) {
     return 0;
  } 
  return array.sort((a,b)=> a - b)[0];
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
  return array.sort((a,b)=> a -b).reverse()[0];
}

exports.avg = function avg (array) {
  let num = 0;
  if (array === undefined || array.length == 0) {
    return 0;
  }
 else {for (let i = 0; i < array.length; i++) {
 num += array[i];
 }}
 return num / array.length;
}
