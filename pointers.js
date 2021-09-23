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

// //Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible,
// //return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
// function triplets(arr, targetSum) {
//   arr.sort((a, b) => a - b);
//   let smallest_difference = Infinity;
//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1,
//       right = arr.length - 1;
//     while (left < right) {
//       const target_diff = targetSum - arr[i] - arr[left] - arr[right]; //this
//       if (target_diff === 0) {
//         //found triplet with exact match
//         return targetSum - target_diff;
//       }
//       if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
//         //saves closest difference
//         smallest_difference = target_diff;
//       }
//       if (
//         Math.abs(target_diff) < Math.abs(smallest_difference) || //saves smallest sum when we have more than one solution
//         (Math.abs(target_diff) === Math.abs(smallest_difference) && //this
//           target_diff > smallest_difference)
//       ) {
//         smallest_difference = target_diff;
//       }
//       if (target_diff > 0) {
//         left += 1; //we need abigger triplet
//       } else {
//         right -= 1; //we need smaller triplet
//       }
//     }
//   }
//   return targetSum - smallest_difference;
// }

// console.log(triplets([-2, 0, 1, 2], 2), 1);

// function make_squares(arr) {
//   const n = arr.length;
//   let squares = Array(n).fill(0);
//   let highestSquareIdx = n - 1;
//   let left = 0,
//     right = n - 1;
//   while (left <= right) {
//     let leftSquare = arr[left] * arr[left],
//       rightSquare = arr[right] * arr[right];
//     if (leftSquare > rightSquare) {
//       squares[highestSquareIdx] = leftSquare;
//       left += 1;
//     } else {
//       squares[highestSquareIdx] = rightSquare;
//       right -= 1;
//     }
//     highestSquareIdx -= 1;
//   }

//   return squares;
// }

// console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
// console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  //[-3, -2, -1, 0, 1, 1, 2];
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1;
      }
    } else if (target_sum > current_sum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
