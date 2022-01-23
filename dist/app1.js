class Car {
    constructor(brand) {
        this.brand = brand;
    }
    getInfo() {
        return this.brand;
    }
}
class Bmw extends Car {
    constructor(country, type) {
        super('Bmw');
        this.country = country;
        this.type = type;
    }
    getInfo() {
        let mainInfo = super.getInfo();
        return `Car information: ${mainInfo}, ${this.country}, ${this.type}`;
    }
}
class Nexia extends Car {
    constructor(country, year) {
        super('Nexia');
        this.country = country;
        this.year = year.getFullYear();
    }
    getInfo() {
        let mainInfo = super.getInfo();
        return `Car information: ${mainInfo}, ${this.country}, ${this.year}`;
    }
}
class Mustang extends Car {
    constructor(country, vin) {
        super('Mustang');
        this.country = country;
        this.vin = vin;
    }
    getInfo() {
        let mainInfo = super.getInfo();
        return `Car information: ${mainInfo}, ${this.country}, ${this.vin}`;
    }
}
let cars = [];
cars.push(new Bmw('Kg', 'Lorry'));
cars.push(new Nexia('Germany', new Date('1985-01-01')));
cars.push(new Mustang('USA', 7987897983987));
cars.push(new Bmw('Japan', 'Sedan'));
cars.push(new Nexia('Poland', new Date('1991-01-01')));
cars.push(new Mustang('France', 898098));
for (let i = 0; i < cars.length; ++i) {
    console.log(cars[i].getInfo());
}
//# sourceMappingURL=app1.js.map