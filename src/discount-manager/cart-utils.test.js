import { getCartTotal } from './cart-utils';

describe('Get cart total.', () => {
   it('Can calculate the total price of the cart items.', () => {
      const cartItems = [
         {
            name: 'Rubber mallet',
            price: 30,
            quantity: 2,
         },
         {
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 1,
         },
      ];

      const result = getCartTotal(cartItems);

      expect(result).toBe(64.95);
   });
});
