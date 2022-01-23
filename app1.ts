abstract class Car {
    protected country: string;
    
    constructor (private brand: string) {}
    
    public getInfo() : string {
    return this.brand;
    }
    }
    
    class Bmw extends Car {
    type: string;
    
    constructor(country: string, type: string) {
    super('Bmw');
    this.country = country;
    this.type = type;
    }
    
    public getInfo () : string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.type}`;
    }
    }
    
    class Nexia extends Car {
    year: number;
    
    constructor (country: string, year: Date) {
    super('Nexia');
    this.country = country;
    this.year = year.getFullYear();
    }
    
    public getInfo () : string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.year}`;
    }
    }
    
    class Mustang extends Car {
    vin: number;
    
    constructor (country: string, vin: number) {
    super('Mustang');
    this.country = country;
    this.vin = vin;
    }
    
    public getInfo () : string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.vin}`;
    }
    }
    
    let cars: Car[] = [];
    
    cars.push(new Bmw('Kg', 'Lorry'));
    cars.push(new Nexia('Germany', new Date('1985-01-01')));
    cars.push(new Mustang('USA', 7987897983987));
    cars.push(new Bmw('Japan', 'Sedan'));
    cars.push(new Nexia('Poland', new Date('1991-01-01')));
    cars.push(new Mustang('France', 898098));
    
    for (let i = 0; i < cars.length; ++i) {
    console.log(cars[i].getInfo());
    }