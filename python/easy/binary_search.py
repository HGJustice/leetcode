def binarySearch(numsArray, number) -> int:

    left = 0
    right = len(numsArray) - 1

    while left <= right:

        mid = (left + right) // 2

        if numsArray[mid] == number:
            return mid
        
        if numsArray[mid] < number:
            left = mid + 1

        else: 
            right = mid - 1

    return -1