function logEachMatrixItem(matrix) {
    console.log('\nLog each matrix item:');

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(` item {${i},${j}} - ${matrix[i][j]}`);
        }
    }
}

function showMatrix(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' ') );
    }
}

function showSumByRow(matrix) {

    let sumResults = [];
    let sum;

    for (let i = 0; i < matrix.length; i++) {
        sum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }

        sumResults.push(sum);
    }

    console.log(` result - `, sumResults);
}

function findColumnWithZero(matrix) {

    let columnWithZeroIdx = [];
    let columnCount = matrix[0].length;
    
    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[j][i] === 0) {
                columnWithZeroIdx.push(i);
                break;
            }
        }
    }

    console.log('result indexes - ', columnWithZeroIdx);
}

function snakeBypass(matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j=0; j < matrix[i].length; j++) {

            let stringInd = i % 2 === 0 
            ? 
            [j] 
            : (matrix[i].length - j - 1);

            console.log(matrix[i][stringInd]);
        }
    }
}

function logMainDiag(matrix) {
    console.log(`Main diag:`);

    for (let i = 0; i < matrix.length; i++) {
        console.log( matrix[i][i] );
    }
}

function logSideDiag(matrix) {

    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        console.log(matrix[i][n-i-1]);
    }
}

function showBottomMainTriangle(matrix) {
    let row;

     for (let i = 0; i < matrix.length; i++) {
        row = [];

        for (let j = 0; j <= i; j++) {

            row.push( matrix[i][j] );
        }

        console.log( row.join(' ') );
     }
}


let matrix = [ 
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [0, 3, 6, 9],
    [6, 8, 0, 2],
];

// logEachMatrixItem(matrix);
// showMatrix(matrix);
// showSumByRow(matrix);
// findColumnWithZero(matrix);

let smallMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// showMatrix(smallMatrix);
// snakeBypass(smallMatrix);

// logMainDiag(smallMatrix);
// logSideDiag(smallMatrix);
showBottomMainTriangle(matrix);