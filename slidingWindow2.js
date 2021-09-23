// const lengthOfOnes = (arr, k) => {
//   //[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
//   let windowStart = 0,
//     maxLength = 0,
//     maxOnesCount = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     if (arr[windowEnd] === 1) {
//       maxOnesCount += 1;
//     }

//     if (windowEnd - windowStart + 1 - maxOnesCount > k) {
//       if (arr[windowStart] === 1) {
//         maxOnesCount -= 1;
//       }
//       windowStart += 1;
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// };

// console.log(lengthOfOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2), "6");
// console.log(lengthOfOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3), "9");

function find_string_anagrams(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};
  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  const resultIndices = [];
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }
    if (matched === Object.keys(charFrequency).length) {
      resultIndices.push(windowStart);
    }
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
      }
      charFrequency[leftChar] += 1;
    }
  }
  return resultIndices;
}
//return index where angaragm starts
console.log(find_string_anagrams("ppqp", "pq"));
console.log(find_string_anagrams("abbcabc", "abc"));
