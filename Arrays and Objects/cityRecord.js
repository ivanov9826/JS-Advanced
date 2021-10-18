function cityRecord(name , population , treasury){
    let city = {
        name ,
        population ,
        treasury,
        taxRate : 10 ,
        collectTaxes() {
            let sum = this.population * this.taxRate
            this.treasury += sum
        },
        applyGrowth(percentage){
            let increase = Math.floor((this.population / 100) * percentage)
            this.population += increase
        },
        applyRecession(percentage){
            let decrease = Math.floor((this.treasury / 100) * percentage)
            this.treasury -= decrease
        }
    }
    console.log(city);
    city.applyGrowth(10)
    city.applyRecession(50)
    console.log(city);
}

cityRecord('Tortuga',
7000,
15000)