function search(numsArray, target) {
  if (!numsArray) {
    return -1;
  }
  let left = 0;
  let right = numsArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numsArray[mid] == target) {
      return mid;
    }

    if (numsArray[left] <= numsArray[mid]) {
      if (target >= numsArray[left] && target < numsArray[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= numsArray[right] && target > numsArray[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
