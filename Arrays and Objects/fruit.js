function fruitPrice(fruit , weight , price){
    weight = weight /1000
    price = price * weight

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} ${fruit}`)
}
fruitPrice('apple', 1563, 2.35)