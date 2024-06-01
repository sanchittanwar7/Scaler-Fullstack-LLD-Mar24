const HPLaptop = {
    name: 'HP',
    price: '50000',
    ram: '16'
}

const lenovoLaptop = {
    name: "Lenovo",
    price: '40000',
    ram: '8'
}

const acerLaptop = {
    name: "Acer",
    price: "45000",
    ram: "16"
}

// const laptop = (name, price, ram) => {
//     const laptop = {}
//     laptop.name = name;
//     laptop.price = price;
//     laptop.ram = ram;
//     return laptop
// }

// constructor function
function Laptop(laptopName, laptopPrice, laptopRAM){
    this.name = laptopName;
    this.price = laptopPrice;
    this.ram = laptopRAM;
    this.describe = () => {
        console.log(`Name: ${this.name} | Price: ${this.price} | RAM: ${this.ram}`)
    }
}

// const appleLaptop = laptop("Apple", "100000", "32")
const appleLaptop = new Laptop("Apple", "100000", "32")

appleLaptop.describe()

