function getMaxSubSum(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  let currSum = 0;
  let maxSum = 0;

  for(let i = getPosIndex(arr); i < arr.length; i++) {
    if (i === -1) return 0;

    if (arr[i] < 0) {
      let nextPosIndex = getPosIndex(arr, i);
      let nextNegIndex = getNegIndex(arr, nextPosIndex);

      if (nextPosIndex === -1) return maxSum;

      let sumOfNegatives = summarize(arr, i, nextPosIndex);
      let sumOfPositives = (nextNegIndex === -1) ? arr[nextPosIndex] : summarize(arr, nextPosIndex, nextNegIndex);

      if (nextNegIndex > 0) {
        i = nextNegIndex;
      }

      if (sumOfPositives + sumOfNegatives >= 0) {
        sum += sumOfNegatives + sumOfPositives;

        if (nextNegIndex > 0) {
          i = nextNegIndex;
          continue;
        } else {
          return maxSum;
        }

      } else {
        if (nextNegIndex > 0) {
          currSum = sum;
          sum = 0;
          i = nextNegIndex;
          continue;
        } else {
          return maxSum;
        }
      }
    }
    sum += arr[i];
    maxSum = Math.max(sum, currSum);
  }

  return maxSum;
}

function getPosIndex(arr, startAt = 0) {
  let i = startAt;
  while (arr[i] <= 0 && i < arr.length) {
    if (i === arr.length -1 && arr[i] < 0) return -1;
    i++;
  }
  return i;
}

function getNegIndex(arr, startAt = 0) {
  let i = startAt;
  while (arr[i] >= 0 && i < arr.length) {
    if (i === arr.length -1 && arr[i] > 0) return -1;
    i++;
  }
  return i;
}

function summarize(arr, startPos = 0, endPos = arr.length) {
  let sum = 0;
  for(let i = startPos; i < endPos; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(getPosIndex([4, 4, -1, -1, -1, -1, 1], 2))
// console.log(getNegIndex([4, 4, -1, 3, 3, 3, 3, 3, 3, -1, -1, 1], 3))
// console.log(summarize([-1, -2, -3, 2, 2], 1, 3))

console.log(getMaxSubSum([-1, 2, 3, -9, 11] ))