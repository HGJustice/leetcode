def dfs(grid, i, j, totalSum=0) -> int:
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == 0:
        return 0
    
    totalSum += grid[i][j]
    grid[i][j]

    return totalSum + dfs(grid, i + 1, j) + dfs(grid, i - 1) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1)


def numIslandsDivisible(grid, k):

    num_islands = 0
    
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] > 0:
                result = dfs(grid, i, j)
                if result % k == 0:
                    num_islands += 1

    return num_islands