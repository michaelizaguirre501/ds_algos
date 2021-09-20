let theOne = [9, 27, 38, 3, 43, 10, 82]; //i just watched the matrix, chill
//sort til => [3,9,10,27,38,43,82]

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }

  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }
  console.log("splitting is happening here");
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort(theOne));
