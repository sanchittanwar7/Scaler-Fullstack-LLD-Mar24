class Laptop {
    constructor(laptopName, laptopPrice, laptopRAM) {
        this.name = laptopName;
        this.price = laptopPrice;
        this.ram = laptopRAM;
        // this.describe = () => {
        //     console.log(this)
        //     console.log(`Name: ${this.name} | Price: ${this.price} | RAM: ${this.ram}`)
        // }
    }

    // Prototype functions
    describe() {
        console.log(this)
        console.log(`Name: ${this.name} | Price: ${this.price} | RAM: ${this.ram}`) 
    }
}

const dellLaptop = new Laptop("DELL", "60000", "16");

console.log(dellLaptop)
dellLaptop.describe()