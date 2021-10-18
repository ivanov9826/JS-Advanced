function storeCatalogue(array) {
    let dictionary = {};

    while (array.length) {
        let [name, price] = array.shift().split(' : ');
        let firstLetter = name[0];

        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }

        dictionary[firstLetter].push({ name, price: Number(price) });
        dictionary[firstLetter].sort((a, b) => ((a.name).localeCompare(b.name)));
    }
    let result = [];

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(e => {
            let values = e[1].sort((a, b) => (a.name.localeCompare(b.name)))
                .map(product => `  ${product.name}: ${product.price}`)
                .join('\n');

            let string = `${e[0]}\n${values}`
            result.push(string)
        });
    
    return result.join('\n')
}

console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']))