import heapq

def findRelativeRanks(score):

  result = [0] * len(score)
  max_heap = []

  for i in range(len(score)):
    heapq.heappush(max_heap, (-score[i], i))

  for counter in range(len(max_heap)):
    current_rank, current_rank_index = heapq.heappop(max_heap)
    match counter:
      case 0:
        result[current_rank_index] = "Gold medal"
      case 1:
        result[current_rank_index] = "Silver medal"
      case 2:
        result[current_rank_index] = "Bronze medal"
      case 3:
        result[current_rank_index] = "4th"
      case 4:
        result[current_rank_index] = "5"
      case _:
        result[current_rank_index] = str(counter + 1)
 
arr = [10,3,8,9,4]
print(findRelativeRanks(arr))
    




