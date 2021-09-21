// function pair_with_target_sum(arr, targetSum) {
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === targetSum) {
//       return [left, right];
//     }

//     if (targetSum > currentSum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//   }
//   return [-1, -1];
// }

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

//Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible,
//return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
function triplets(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        //found triplet with exact match
        return targetSum - target_diff;
      }
      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
        //saves closest difference
        smallest_difference = target_diff;
      }
      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) || //saves smallest sum when we have more than one solution
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff;
      }
      if (target_diff > 0) {
        left += 1; //we need abigger triplet
      } else {
        right -= 1; //we need smaller triplet
      }
    }
  }
  return targetSum - smallest_difference;
}

console.log(triplets([-2, 0, 1, 2], 2), 1);
