function calorieObj(arr) {
    const result = {}
    for (let i = 0; i < arr.length; i++ ){
        let product = arr[i]
        i++
        let cal = arr[i]
        result[product] = cal
    }
    console.log(result);
}

calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])