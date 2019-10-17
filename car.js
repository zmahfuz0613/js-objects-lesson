const car = {
    make: 'Tesla',
    model: 'Model 3',
    awd: true,
    color: 'matte black',
    print: function() {
        console.log(`${this.model}`)
    }
}

const myTesla =  Object.create(car)
myTesla.print()

const Car = function(make, model, awd, color) {
    this.make = make,
    this.model = model,
    this.awd = awd,
    this.color = color,
    this.print = function() {
        console.log(this.model)
    }
}

const car1 = new Car('tesla', 'model x', true, 'grey')
car1.print()

const printAll = function(car) {
    for (let key in car) {
        console.log(`${key} = ${car[key]}`)
    }
}

// printAll(car)
console.log(Object.keys(car))
console.log(Object.getOwnPropertyNames(car))
