function towns(array) {
    function lineFilter(array){
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(element !== '|' && element !== ' '){
                result.push(element)
            };
        };
        
        return result.join('');
    }
    let heads = array.shift().split('').filter(lineFilter);
    let result = [];
    console.log(heads);

}

console.log(towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))