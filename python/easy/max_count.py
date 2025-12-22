def maximumCount(nums) -> int:

    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] < 0:
            left = mid + 1
        else:
            right = mid - 1

    negative = mid

    left = 0
    right = len(nums)

    while left < right:
        mid = (left + right) // 2

        if nums[mid] > 0:
            right = mid
        else:
            left = mid + 1

    positive = len(nums) - right

    return max(negative, positive)
    
nums = [-2,-1,-1,1,2,3]
print(maximumCount(nums))

