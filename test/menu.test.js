const Menu = require('../src/menu');
const Dish = require('../src/dish');
describe('Menu', () => {
  let menu;

  beforeEach(() => {
    menu = new Menu;
    pizza = new Dish('pizza', 1);
    panino = new Dish('panino', 2);
  });

  test('adding dish into a list', () => {
    menu.addDish(pizza);
    expect(menu.list).toEqual([{name: 'pizza', price: 1}]);
  })

  test('printing the menu', () => {
    menu.addDish(pizza);
    menu.addDish(panino);
    expect(menu.printMenu()).toEqual('1. pizza: £1,2. panino: £2');
  });
});