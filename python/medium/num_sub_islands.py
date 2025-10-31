def dfs(grid1, grid2, i, j) -> bool:
    if i < 0 or i >= len(grid2) or j < 0 or j >= len(grid2[0]) or grid2[i][j] == 0:
        return True
    
    if grid1[i][j] != grid2[i][j]:
        return False
    grid2[i][j] = 0

    result1 = dfs(grid1, grid2, i + 1, j)
    result2 = dfs(grid1, grid2, i - 1, j)
    result3 = dfs(grid1, grid2, i, j + 1)
    result4 = dfs(grid1, grid2, i, j - 1)

    if result1 and result2 and result3 and result4:
        return True
    
    return False


def checkSubIslands(grid1, grid2) -> int:
    
    num_sub_islands = 0
    
    for i in range(len(grid2)):
        for j in range(len(grid2[0])):
            if grid2[i][j] == 1:
                result = dfs(grid1, grid2, i, j)
                if result:
                    num_sub_islands += 1
    
    return num_sub_islands


grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]
grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]

print(checkSubIslands(grid1, grid2))
    