const Menu = require('../src/menu');
const Dish = require('../src/dish');
describe('Menu', () => {
  let menu;

  beforeEach(() => {
    menu = new Menu;
    pizza = new Dish('pizza', 1);
  });

  test('adding dish into a list', () => {
    menu.addDish(pizza);
    expect(menu.list).toEqual([{name: 'pizza', price: 1}]);
  })
});