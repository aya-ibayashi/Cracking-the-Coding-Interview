#1.8
# Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
# column are set to 0. 

def zeroMatrix (matrix):
    positionsOfZero = []
    for row in range(0, len(matrix)):
        for i in range(0, len(matrix[row])):
            if matrix[row][i] == 0:
                positionsOfZero.append([row,i])
    
    for position in positionsOfZero:
        targetRow = matrix[position[0]]
        targetColumn = position[1]
        for index in range(len(targetRow)):
            targetRow[index] = 0
        for row in range(len(matrix)):
            matrix[row][targetColumn] = 0

    return matrix

matrix = [
    [1,2,0,4],
    [5,5,5,5],
    [5,0,7,8],
    [9,10,11,12]

]
print(zeroMatrix(matrix))