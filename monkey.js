

const monkey = {
  name: 'latterb',
  species: 'Capuchin Monkey',
  foodsEaten: 'nuts',
  monkeyInfo() {
    console.log(`Hello, This is ${this.name}. I am ${this.species}.`)
  },
  eatSomething() {
    console.log(`I like to eat ${this.foodsEaten}.`)
  }
}


const monkeyTwo = {
  name: 'kappon',
  species: 'Baboon',
  foodsEaten: 'bugs',
  monkeyInfo() {
    console.log(`Hello, This is ${this.name}. I am ${this.species}.`)
  },
  eatSomething() {
    console.log(`I like to eat ${this.foodsEaten}.`)
  }
}
const monkeyThree = {
  name: 'monty',
  species: 'Blue Monkey',
  foodsEaten: 'banana',
  monkeyInfo() {
    console.log(`Hello, This is ${this.name}. I am ${this.species}`)
  },
  eatSomething() {
    console.log(`I like to eat ${this.foodsEaten}.`)
  }
}

monkey.monkeyInfo()
monkey.eatSomething()
monkeyTwo.monkeyInfo()
monkeyTwo.eatSomething()
monkeyThree.monkeyInfo()
monkeyThree.eatSomething()


