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

  test('testing test', () => {
    expect(dish.hello('hello world')).toEqual('hello world');
  })
});