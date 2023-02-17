// Author: Moisés Adame-Aguilar
// Date: February 16, 2023
// Descrption: Sum of two matrices.

function matrixSum(matrix1, matrix2){
    if(matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length){
        var resMatrix = []
        for(var i = 0; i < matrix1.length; i++){
            var row = []
            for(var j = 0; j < matrix1[0].length; j++){
                row.push(matrix1[i][j] + matrix2[i][j])
            }
            resMatrix.push(row)
        }
        return resMatrix
    }else{
        throw 'Matrices must be the same dimension.'
    }
}