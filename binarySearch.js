function divideAndConq(array, target) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower <= upper) {
    console.log("attempt");
    const middle = Math.floor((upper + lower) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (target < array[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
}
