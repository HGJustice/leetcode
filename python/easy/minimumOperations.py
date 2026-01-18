def minimumOperations(nums):
    non_zero = set(nums) - {0}
    return len(non_zero)