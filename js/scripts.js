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

function Order(){
  this.pizzas = [];
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

$(function(){

  var order;
  newOrder = new Order;

  $("form#add-pizza-form").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var pizzaSize = $('#pizza-size').val();

    $('#toppings input:checked').each(function(){
      toppings.push(this.value);
    });

    newPizza = new Pizza(pizzaSize, toppings);
    newOrder.addPizza(newPizza);
    $("#pizza-list").append(newPizza.pizzaSize + " pizza with " + newPizza.toppings + '<br>');
    $("#order").text("Your total for " + newOrder.pizzas.length + " pizzas  is $" + newOrder.orderCost() +".");
  });
});
