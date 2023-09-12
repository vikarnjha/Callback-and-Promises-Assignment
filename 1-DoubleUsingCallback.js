function doubleArray(arr, callback) {
  const doubleArray = arr.map((num) => {
    return callback(num);
  });
  return doubleArray;
}
function callback(num) {
  return num * 2;
}
const originalArray = [1, 2, 3, 4, 5];
newArray = doubleArray(originalArray, callback);
console.log(newArray); // [ 2, 4, 6, 8, 10 ]
console.log(doubleArray(newArray, callback)); // [ 4, 8, 12, 16, 20 ]
