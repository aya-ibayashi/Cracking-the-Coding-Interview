// 1.8. Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 
//assuming all rows have same number of elements

function zeroMatrix(matrix){
    if(matrix.length == 0 ){
        return false
    }
    let rows = {}
    let columns = {}
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0 ){
               if (!(i in rows)){
                   rows[i] = true
               }
               if (!(j in columns)){
                   columns[j] = true
               }
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if (i in rows){
                matrix[i][j] = 0
            }
            if (j in columns){
                matrix[i][j] = 0
            }

        }
    }


    return matrix;
}

let matrix = [
    [1,2,3],
    [4,0,9],
    [2,3,9],
    [2,0,9]
]

console.log(zeroMatrix(matrix))