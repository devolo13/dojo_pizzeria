function pizzaOven(name) {
  var harrysPizza = {
    crustType: 'deep dish',
    sauceType: 'traditional',
    cheeses: ['mozzarella'],
    toppings: ['pepperoni', 'sausage'],
  };
  var hagridsPizza = {
    crustType: 'hand tossed',
    sauceType: 'marinara',
    cheeses: ['mozzarella', 'feta'],
    toppings: ['mushrooms', 'olives', 'onions'],
  };
  if (name == 'Harry' || name == 'harry') {
    return harrysPizza;
  } else if (name == 'Hagrid' || name == 'hagrid') {
    return hagridsPizza;
  } else {
    return randomPizza();
  }
}
function randomPizza() {
  var pizzaOptions = {
    crustType: ['deep dish', 'hand tossed', 'thin crust', 'stuffed crust'],
    sauceType: ['traditional', 'marinara', 'ranch', 'bbq'],
    cheeses: ['mozzarella', 'feta', 'cheddar', 'provolone'],
    toppings: ['pepperoni', 'sausage', 'mushrooms', 'olives'],
  };
  var pizza = {
    crustType: '',
    sauceType: '',
    cheeses: [],
    toppings: [],
  };
  var random = Math.floor(Math.random() * pizzaOptions.crustType.length);
  pizza.crustType = pizzaOptions.crustType[random];
  random = Math.floor(Math.random() * pizzaOptions.sauceType.length); // creates a random number from 0 to arr.length
  pizza.sauceType = pizzaOptions.sauceType[random];
  var amountOfToppings = Math.floor(Math.random() * pizzaOptions.cheeses.length + 1); // creates a random number from 1 to arr.length
  for (var i = 1; i <= amountOfToppings; i++) {
    random = Math.floor(Math.random() * pizzaOptions.cheeses.length);
    pizza.cheeses.push(pizzaOptions.cheeses[random]);
    pizzaOptions.cheeses.splice(random, 1);
  }
  var amountOfToppings = Math.floor(Math.random() * pizzaOptions.toppings.length + 1);
  for (var i = 1; i <= amountOfToppings; i++) {
    random = Math.floor(Math.random() * pizzaOptions.toppings.length);
    pizza.toppings.push(pizzaOptions.toppings[random]);
    pizzaOptions.toppings.splice(random, 1);
  }
  return pizza;
}
console.log(pizzaOven());
