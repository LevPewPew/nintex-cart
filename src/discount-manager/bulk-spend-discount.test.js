import { getBulkSpendDiscount } from './bulk-spend-discount';

describe('Get Bulk Spend discount.', () => {
   it('Returns 0 discount amount for cart items when the cart total is too low.', () => {
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

      const discountConfig = {
         code: '44F4T11',
         description: '15% discount for orders above $1500 (pre-discount)',
         type: 'BULK_SPEND',
         minSpend: 1500,
         discountPercentage: 15,
      };

      const result = getBulkSpendDiscount(cartItems, discountConfig);

      expect(result).toBe(0);
   });

   it('Returns the correct discount amount for cart item total is greater then the minSpend.', () => {
      const cartItems = [
         {
            name: 'ICBM',
            price: 2000,
            quantity: 1,
         },
         {
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 1,
         },
      ];

      const discountConfig = {
         code: '44F4T11',
         description: '15% discount for orders above $1500 (pre-discount)',
         type: 'BULK_SPEND',
         minSpend: 1500,
         discountPercentage: 15,
      };

      const result = getBulkSpendDiscount(cartItems, discountConfig);

      expect(result).toBe(300.7425);
   });
});
