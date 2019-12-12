class Menu {
  constructor() {
    this.list = [];
  };

  addDish(dish) {
    this.list.push({ name: dish.name, price: dish.price });
    // console.log(this.list);
  }

  printMenu() {
    let menu = this.list.map((item, index) => {
      return `${index + 1}. ${item.name}: £${item.price}`;
   });
    // for(let i = 0; i < this.list.length; i++){
      
    //   `${i +1}. ${this.list[1].name}: £${this.list[i].price}`;

    // };
   return menu.join();
  };
};

module.exports = Menu;