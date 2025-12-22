function binarySearch(numsArr, numberTarget) {
  if (!numsArr) {
    return false;
  }

  let left = 0;
  let right = numsArr[numsArr.length - 1];

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (numsArr[mid] == numberTarget) {
      return true;
    }

    if (numsArr[mid] < numberTarget) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

const arr = [1, 3, 5, 6, 8, 9];
console.log(binarySearch(arr, 3));
