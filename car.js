const tesla1 = {
    make: 'Tesla',
    model: 'Model 3',
    awd: true,
    doors: 4,
    print: function() {
        console.log(`The make is ${this.make}, the model is ${this.model} is it awd? ${this.awd}, number of doors:  ${this.doors}`)
    }
}

const tesla2 = {
    make: 'Tesla',
    model: 'Model X',
    awd: true,
    doors: 2,
    print: function() {
        console.log(`The make is ${this.make}, the model is ${this.model} is it awd? ${this.awd}, number of doors:  ${this.doors}`)
    }
}

const tesla3 = {
    make: 'Tesla',
    model: 'Model S 90P',
    awd: true,
    doors: 4,
    print: function() {
        console.log(`The make is ${this.make}, the model is ${this.model} is it awd? ${this.awd}, number of doors:  ${this.doors}`)
    }
}

// constructor function
const Tesla = function(make, model, awd, doors) {
    this.make = make,
    this.model = model,
    this.awd = awd,
    this.doors = doors,
    this.print = function () {
        console.log(`The make is ${this.make}, the model is ${this.model} is it awd? ${this.awd}, number of doors:  ${this.doors}`)
    }
}

const philipsTesla = new Tesla('Tesla', 'Model S', true, 4)
const yevsTesla = new Tesla('Tesla', 'Model S 90PD', true, 4)
const andresTesla = new Tesla('Tesla', 'Model S 90PD', true, 4)

const printAll = function(tesla) {
    for(let key in tesla) {
        console.log(`${key} = ${tesla[key]}`)
    }
}

// printAll(tesla1)

// console.log(Object.keys(andresTesla))

// immutable property
const tesla = {}
Object.defineProperty( tesla, "make", {
  value: "Tesla",
  writable: false,
  enumerable: true,
  configurable: true
})

console.log(Object.keys(tesla))
