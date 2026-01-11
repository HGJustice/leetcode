import heapq

arr = [-4, 3, 1, 0, 2, 5, 10, 8, 12, 9]

for i in range(len(arr)):
    arr[i] = -arr[i]
heapq.heapify(arr)

print(arr)