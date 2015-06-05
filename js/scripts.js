function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}


Pizza.prototype.pizzaCost = function(){
  var pizzaCost = 0;
  switch (this.pizzaSize){
    case "large":
      pizzaCost = 16;
      break;
    case "medium":
      pizzaCost = 14;
      break;
    case "small":
      pizzaCost = 12;
      break;
  }
  pizzaCost += (this.toppings.length)
  return pizzaCost;
}

function Order(pizza){
  this.pizzas = [pizza];
}



Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.orderCost = function() {
  var orderCost = 0;
  for(var i=0; i< this.pizzas.length; i++){
    debugger
    orderCost += this.pizzas[i].pizzaCost();
  }
  return orderCost;
}
