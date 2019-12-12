class Menu{
  constructor() {
    this.list = [];
  };

  addDish(dish){
    this.list.push({name: dish.name, price: dish.price});
  }
};

module.exports = Menu;