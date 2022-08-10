
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = []
    if (Array.isArray(matrix) && matrix.length > 0) {
    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                newArray.push(matrix[i][j]);
            } else{
                newArray.push(matrix[i][matrix[i].length-j-1]);
            }
        }
    }
    }
    return newArray;
}
