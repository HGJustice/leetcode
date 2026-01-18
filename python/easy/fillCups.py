import heapq

def fillCups(amount):

    seconds = 0
    max_heap = []
    
    if sum(amount) == 0:
        return 0

    for i in range(len(amount)):
        heapq.heappush(max_heap, -amount[i])
    
    while(len(max_heap)) > 1:
        first = -heapq.heappop(max_heap)
        second = -heapq.heappop(max_heap)

        first -= 1
        second -= 1
        seconds += 1

        if first > 0:
            heapq.heappush(max_heap, -first)
        if second > 0:
            heapq.heappush(max_heap, -second)
    
    if max_heap:
        seconds += max_heap[0]

    return seconds