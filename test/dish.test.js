const Dish = require('../src/dish');

describe("Dish", () => {
  let dish;
  
  beforeEach(() => {
    dish = new Dish;
  });

  test('add dish name', () => {
    pizza = new Dish('pizza', 1);
    expect(pizza.name).toEqual('pizza');
  })

  test('add dish price', () => {
    pizza = new Dish('pizza', 1);
    expect(pizza.price).toEqual(1);
  })
});