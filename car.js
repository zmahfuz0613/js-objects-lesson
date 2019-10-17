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

const Monkey = function(name, species) {
    this.name = name,
    this.species = species,
    this.foodsEaten = [],
    this.eatSomething = function(food) {
        this.foodsEaten.push(food)
    },
    this.introduce = function() {
        console.log(`Hello! My name is ${this.name}. I am a ${this.species} monkey. And I have eaten ${this.foodsEaten}.`)
    }
}

const monkey1 = new Monkey("Bruno", "developer")
monkey1.eatSomething('bananas')
monkey1.eatSomething('apples')
monkey1.introduce()

const monkey2 = new Monkey("Debbie", "artist")
monkey2.eatSomething('celery')
monkey2.eatSomething('carrots')
monkey2.introduce()

const monkey3 = new Monkey("Charles", "construction worker")
monkey3.eatSomething('meat')
monkey3.eatSomething('lamb')
monkey3.introduce()
