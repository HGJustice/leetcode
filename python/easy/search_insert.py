def searchInsert(nums, target) -> int:

    left = 0
    right = len(nums) - 1
    position = 0

    while left <= right:

        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        
        if nums[mid] > target:
            position = mid

        if nums[len(nums) - 1] < target:
            position = len(nums)

        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return position