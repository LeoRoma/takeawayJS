var dish = 'pizza';

class Takeaway {
  constructor() {
    this.order = [];
  };
  
  addOrder(dish) {
    this.order.push(dish)
  };

  hello(string) {
    return 'hello world';
  };
}
module.exports = Takeaway; 