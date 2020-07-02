// 1.8. Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 
//assuming all rows have same number of elements

function zeroMatrix(matrix){
    if(matrix.length == 0 ){
        return false
    }

// Scanning for zeros
    // using new arrays to store data: rows and columsn 
    // let rows = []
    // let columns = []
    // for(let i=0; i<matrix.length; i++){
    //     for(let j=0; j<matrix[0].length; j++){
    //         if(matrix[i][j] == 0 ){
    //            if (!(i in rows)){
    //                rows[i] = true
    //            }
    //            if (!(j in columns)){
    //                columns[j] = true
    //            }
    //         }
    //     }
    // }

    //using the first row and column to store data
    let zeroInFirstRow = false;
    let zeroInFirstColumn = false;

    for (let j=0; j<matrix[0].length; j++){
        if(matrix[0][j] == 0){
            zeroInFirstRow = true
        }
    }
    for (let i=0; i<matrix.length; i++){
        if(matrix[i][0] == 0){
            zeroInFirstColumn = true
        }
    }

    for(let i=1; i<matrix.length; i++){
        for(let j=1; j<matrix[0].length; j++){
            if(matrix[i][j] == 0 ){
                matrix[0][j] = true
                matrix[i][0] = true
            }
        }
    }

    for(let j=1; j<matrix[0].length; j++){
        if (matrix[0][j] === true || matrix[0][j] == 0){
            for(let i=1; i<matrix.length; i++){
                matrix[i][j] = 0
            }
        }
    }

    for(let i=1; i<matrix.length; i++){
        if (matrix[i][0] === true || matrix[i][0] == 0){
            for(let j=1; j<matrix[0].length; j++){
                matrix[i][j] = 0
            }
        }
    }

    if (zeroInFirstColumn){
        for(let i=0; i<matrix.length; i++){
            matrix[i][0] = 0
        }
    }

    if (zeroInFirstRow){
        for(let j=0; j<matrix[0].length; j++){
            matrix[0][j] = 0
        }
    }



//setting to zero
    //looping through rows and columns
    // for (let i=0; i<rows.length; i++){
    //     if (rows[i] == true){
    //         for(let j=0; j<matrix[0].length; j++){
    //             matrix[i][j] = 0
    //         }
    //     }
    // }

    // for (let j=0; j<columns.length; j++){
    //     if (columns[j] == true){
    //         for(let i=0; i<matrix.length; i++){
    //             matrix[i][j] = 0
    //         }
    //     }
    // }


    //looping through matrix
    // for(let i=0; i<matrix.length; i++){
    //     for(let j=0; j<matrix[0].length; j++){
    //         if (i in rows){
    //             matrix[i][j] = 0
    //         }
    //         if (j in columns){
    //             matrix[i][j] = 0
    //         }

    //     }
    // }


    return matrix;
}

// let matrix = [
//     [1,0,3,5],
//     [4,1,9,5],
//     [2,3,9,5],
//     [2,0,9,5],
//     [3,3,0,5]
// ]


let matrix = [
    [0,2,3,0],
    [5,5,5,5],
    [9,9,9,8],
    [0,10,11,12]
]

// [0,0,0,0],
// [0,0,5,5],
// [0,0,0,0],
// [0,0,11,12]


console.log(zeroMatrix(matrix))