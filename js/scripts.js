function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

function Order(pizza){
  this.pizzas = [pizza]
}


Order.prototype.addPizza = function(pizza) {
  this.pizzas = this.pizzas.push(pizza);
}
