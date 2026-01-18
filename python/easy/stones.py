import heapq

def strongestStone(stones):
    max_heap = []

    for i in range(len(stones)):
        heapq.heappush(max_heap, -stones[i])
    
    while len(max_heap) > 1:
        stone_x = -heapq.heappop(max_heap)
        stone_y = -heapq.heappop(max_heap)

        if stone_x != stone_y:
            new_stone = stone_x - stone_y
            heapq.heappush(max_heap,-new_stone)
        
    
    return -max_heap[0] if max_heap else 0