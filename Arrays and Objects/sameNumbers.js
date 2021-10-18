function solve(input){
    let bool = true
    let arr = input.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        let b = arr[i+1]
        if(b == undefined){
            break;
        }
        if(a != b){
            bool = false
            break;
        }
    }
    console.log(bool);
}


solve(22222222)