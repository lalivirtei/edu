/*
Можно посчитать все возможные подсуммы.

Самый простой путь – посчитать суммы подмассивов, начиная с каждого элемента по очереди.

Например, для [-1, 2, 3, -9, 11]:

// Начиная с -1:
-1
-1 + 2
-1 + 2 + 3
-1 + 2 + 3 + (-9)
-1 + 2 + 3 + (-9) + 11

// Начиная с 2:
2
2 + 3
2 + 3 + (-9)
2 + 3 + (-9) + 11

// Начиная с 3:
3
3 + (-9)
3 + (-9) + 11

// Начиная с -9
-9
-9 + 11

// Начиная с 11
11
*/


function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100