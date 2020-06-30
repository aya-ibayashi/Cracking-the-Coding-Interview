// 1.7. Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 
// I: matrix 
// O: roated matrix
// C: NxN
// E: empty matrix 

function rotateMatrix(matrix){
    if (matrix.length == 0){
        return null;
    }
    let first = matrix.length - 1
    let last = 0
  
    for (let i = 0; i< matrix.length/2; i++){
        first = i;
        last = matrix.length - 1 - i;
        for(let j=first; j<last; j++){

            let top = matrix[first][j]

            //left to top
            matrix[first][j] = matrix[last-(j-first)][first]

            //bottom to left
            matrix[last-(j-first)][first] = matrix[last][last-(j-first)]

            //right to bottom
            matrix[last][last-(j-first)] = matrix[j][last]

            //top to right
            matrix[j][last] = top

            
            // //top to right
            // temp = matrix[j][last]
            // matrix[j][last] = matrix[first][j]
            
            // //right to bottom
            // temp2 = matrix[last][last- j]
            // matrix[last][last-j] = temp
           
            // //bottom to left
            // temp = matrix[last-j][first]
            // matrix[last-j][first] = temp2

            // //left to top
            // matrix[first][j] = temp

        }
    }
    return matrix;
}

let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

console.log(rotateMatrix(matrix))