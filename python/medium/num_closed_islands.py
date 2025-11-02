
def dfs(grid, i, j) -> bool:
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == 1:
        return True
    
    if i == 0 or i == len(grid) - 1 or j == 0 or j == len(grid[0]) - 1:
        return False

    grid[i][j] = 0

    result1 = dfs(grid, i + 1, j)
    result2 = dfs(grid, i - 1, j)
    result3 = dfs(grid, i, j + 1)
    result4 = dfs(grid, i, j - 1)

    if result1 and result2 and result3 and result4:
        return True


    return False

def numClosedIslands(grid):

    num_closed_islands = 0

    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 0:
                result = dfs(grid, i , j)
                if result:
                    num_closed_islands += 1
    
    return num_closed_islands
