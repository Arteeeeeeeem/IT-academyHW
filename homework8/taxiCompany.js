class car {
    constructor(name, price, year, fuel, color) {
        this.name = name
        this.price = price
        this.year = year
        this.fuel = fuel
        this.color = color
    }
}
class taxoPark {
    createCar(name) {
        if(name.toLowerCase() === 'opel') {
            return new car(name, 10000, 2017, 9, 'gray')
        }
        if(name.toLowerCase() === 'bmw') {
            return new car(name, 11000, 2019, 14, 'black')
        }
        if(name.toLowerCase() === 'mercedes') {
            return new car(name, 15000, 2020, 10, 'white')
        }
        if(name.toLowerCase() === 'audi') {
            return new car(name, 13000, 2018, 9, 'blue')
        }
        if(name.toLowerCase() === 'lada') {
                return new car(name, 8000, 2017, 11, 'brown')
        }
    }
}
const park  = new taxoPark();
const opel = park.createCar('opel');
const bmw = park.createCar('bmw');
const mercedes = park.createCar('mercedes');
const audi = park.createCar('audi');
const lada = park.createCar('lada');

class Filter extends taxoPark {
    constructor() {
        super();
        this.cars = [];
    }
    add(part) {
        this.cars.push(part);
    }
    getPriceAllCars() {
        return this.cars
            .map(part => part.price)
            .reduce((a, b) => a + b)
    }
    SortFuel() {
        return this.cars
            .sort(function (a, b) {
                if (a.fuel > b.fuel) {
                    return 1;
                }
                if (a.fuel < b.fuel) {
                    return -1;
                }
                return 0;
            });
    };
    filterByColor() {
        return this.cars
            .filter(item => item.color === 'gray')
    }
    filterByPrice() {
        return this.cars
            .filter(item => item.price >= 9000 && item.price <12000)
    }
    SortByYear() {
        return this.cars
            .sort(function (a, b) {
                if (a.year > b.year) {
                    return 1;
                }
                if (a.year < b.year) {
                    return -1;
                }
                return 0;
            });
    };
}
class CarNew extends Filter {
    constructor() {
        super();

    }
}
let carNew = new CarNew();
carNew.add(park.createCar('opel'));
carNew.add(park.createCar('bmw'));
carNew.add(park.createCar('mercedes'));
carNew.add(park.createCar('audi'));
carNew.add(park.createCar('lada'));

console.log('Перечень автомобилей в таксопарке:')
console.log(carNew)
console.log('Общая стоимость автомобилей составляет: '+ carNew.getPriceAllCars())
console.log('Сортировка автомобилей по расходу топлива (от меньшего к большему):')
console.log(carNew.SortFuel())
console.log('Фильтрация автомобилей по цвету:')
console.log(carNew.filterByColor())
console.log('Фильтрация автомобилей по стоимости:')
console.log(carNew.filterByPrice())
console.log('Сортировка автомобилей по году выпуска (от старых к новым):')
console.log(carNew.SortByYear())
