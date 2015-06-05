describe('pizza', function(){
  it("creates a new pizza object and takes size and toppings as arguments", function(){
    var newPizza = new Pizza("large", ["onions","pepporoni"]);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.toppings).to.eql(["onions","pepporoni"]);
  });
});

describe('order', function(){
  it("creates a new order object that contains pizza/s", function(){
    var newPizza = new Pizza("large", ["onions", "pepporoni"]);
    var newOrder = new Order(newPizza);
    expect(newOrder.pizzas).to.eql([newPizza]);
  });

  it("allows a pizza to be added to an order", function(){
    var newPizza = new Pizza("large", ["onions", "pepporoni"]);
    var newOrder = new Order(newPizza);
    var newPizza2 = new Pizza("medium", ["onions", "pepporoni"]);
    newOrder.addPizza(newPizza2);
    expect(newOrder.pizzas).to.eql([newPizza, newPizza2]);
  });
});
