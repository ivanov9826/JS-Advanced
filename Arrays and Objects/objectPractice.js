function towns(townArr){
    let towns = {}
    for(let town of townArr){
        let tokens = town.split(' <-> ')
        let townName = tokens[0]
        let townPop = Number(tokens[1])

        if(towns.hasOwnProperty(townName)){
            townPop += towns[townName]
        }
        towns[townName] = townPop
    }
    for(let name in towns){
        console.log(`${name} : ${towns[name]}`)
    }
}

towns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Sofia <-> 12'])