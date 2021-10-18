function heroInventory(input) {
    let result = []
    while(input.length){
        let heroObj = {}
        let element = input.shift()
        let [name , level , itemsList] = element.split(' / ')
        level = Number(level)
        let items = itemsList ? itemsList.split(', ') : [];
        result.push({
            name,
            level,
            items
        })
    }
    return JSON.stringify(result);
}
heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])