// Author: Moisés Adame-Aguilar
// Date: February 16, 2023
// Descrption: Multiplication of two matrices.

function matrixMultiplication(matrix1, matrix2){
    // Validation of the operation
    var validOperation = matrix1[0].length === matrix2.length
    if(validOperation){
        // Rows and columns of the result matrix
        var resRows = matrix1.length
        var resCols = matrix2[0].length

        // Zero matrix will be filled.
        var resMatrix = []
        var row = []
        for(var i = 0; i < resRows; i++){
            row = []
            for(var j = 0; j < resCols; j++){
                row.push(0)
            }
            resMatrix.push(row)
        }
        //console.log(resMatrix)

        for(var i = 0; i < resRows; i++){
            for(var j = 0; j < resCols; j++){
                resMatrix[j][i] += matrix1[i][j] * matrix2[j][i]
            }
        }

        return resMatrix
    }else{
        throw 'Left matrix should have the same number of columns as rows in right matrix.'
    }
}

var matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var matrix2 = [[2, 1], [3, 2], [4, 5]]

console.log(matrixMultiplication(matrix1, matrix2))
