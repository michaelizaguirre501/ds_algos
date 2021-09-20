// //[2,1,5,1,3,2] k=3

// // calculating a sum, starting result variable at 0, a current sum variable which will hold the sum of the current window
// // looping thru adding value to current sum until we hit k number of values from original array
// // when we his k values we set result to the greater value from currentSum and result
// //move start of our window forward one while removing the value of the old starting point from our result

// function sliding(k, arr) {
//   let result = 0;
//   let currentSum = 0;
//   let start = 0;

//   for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];

//     if (end >= k - 1) {
//       result = Math.max(result, currentSum);

//       currentSum -= arr[start]; //subtract out
//       start += 1; //slide window
//     }
//   }

//   return result;
// }

// console.log(sliding(3, [2, 1, 5, 1, 3, 2])); //expected 9

// const longestSubstring = (str, k) => {
//   let windowStart = 0,
//     maxLength = 0,
//     charFrequency = {};

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (!(rightChar in charFrequency)) {
//       charFrequency[rightChar] = 0;
//     }
//     charFrequency[rightChar]++;

//     while (Object.keys(charFrequency).length > k) {
//       const leftChar = str[windowStart];
//       charFrequency[leftChar]--;
//       if (charFrequency[leftChar] === 0) {
//         delete charFrequency[leftChar];
//       }
//       windowStart++;
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// };

// console.log(longestSubstring("araaci", 2)); // 4

const smallestSubarray = (s, arr) => {
  let currentWindowValue = 0; // 2
  let currentWindowLength = Infinity; // 1
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowValue += arr[windowEnd];

    while (currentWindowValue >= s) {
      currentWindowLength = Math.min(
        currentWindowLength,
        windowEnd - windowStart + 1
      );
      currentWindowValue -= arr[windowStart];
      windowStart++;
    }
  }
  if (currentWindowLength === Infinity) {
    return 0;
  }
  return currentWindowLength;
};

console.log("small", smallestSubarray(7, [2, 1, 5, 2, 8]));
// console.log("small", smallestSubarray(8, [3, 4, 1, 1, 6]));
// console.log(smallestSubarray());

const correctSmallestSubarray = (s, arr) => {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};
