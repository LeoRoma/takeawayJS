const Takeaway = require('../src/takeaway');

describe("Takeaway", () => {
  let takeaway;
  
  beforeEach(() => {
    takeaway = new Takeaway;
  });

  test('adding an order', () => {
    takeaway.addOrder('pizza');
    expect(takeaway.order).toEqual(['pizza']);
  })

  test('testing test', () => {
    expect(takeaway.hello('hello world')).toEqual('hello world');
  })
});