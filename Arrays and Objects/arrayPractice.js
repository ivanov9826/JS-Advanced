function solve(arr) {
    let isEqual = true
    let rowSum = [];
    let colSum = []
    for (let i = 0; i < arr.length; i++) {
        let col = arr[i]
        let sum = col.reduce((a, b) => (a+b) , 0)
        colSum.push(sum)
    }
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let z = 0; z < arr.length; z++) {
            let el = arr[z][i]
            sum += el
        }
        rowSum.push(sum)
    }
    rowSum = rowSum.reduce((a,b) => (a+b) ,0)
    colSum = colSum.reduce((a,b) => (a+b) ,0)
    console.log(rowSum);
    console.log(colSum);
}

solve([[4, 7, 6],
[6, 5, 4],
[5, 5, 5]])

