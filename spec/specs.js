describe('pizza', function(){
  it("creates a new pizza object and takes size and toppings as arguments", function(){
    var newPizza = new Pizza("large", ["onions","pepperoni"]);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.toppings).to.eql(["onions","pepperoni"]);
  });

  it("allows us to calculate the cost of a pizza", function(){
    var newPizza = new Pizza("large", ["onions", "pepperoni"]);
    expect(newPizza.pizzaCost()).to.equal(18)
  });
});

describe('order', function(){
  it("creates a new order object that contains pizza/s", function(){
    var newPizza = new Pizza("large", ["onions", "pepperoni"]);
    var newOrder = new Order(newPizza);
    expect(newOrder.pizzas).to.eql([newPizza]);
  });

  it("allows a pizza to be added to an order", function(){
    var newPizza = new Pizza("large", ["onions", "pepperoni"]);
    var newOrder = new Order(newPizza);
    var newPizza2 = new Pizza("medium", ["onions", "pepperoni"]);
    newOrder.addPizza(newPizza2);
    expect(newOrder.pizzas).to.eql([newPizza, newPizza2]);
  });

  it("allows us to calculate the cost of an order", function(){
    var newPizza = new Pizza("large", ["onions", "pepperoni"]);
    var newOrder = new Order(newPizza);
    var newPizza2 = new Pizza("medium", ["onions", "pepperoni"]);
    newOrder.addPizza(newPizza2);
    expect(newOrder.orderCost()).to.equal(34);
  })
});
