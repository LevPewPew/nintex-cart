import { applyBulkSpendDiscount } from './bulk-spend-discount';

describe('Apply Bulk Spend discount.', () => {
   it("Returns null if discount can't be applied.", () => {
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

      const result = applyBulkSpendDiscount(cartItems, discountConfig);

      expect(result).toBe(null);
   });

   it('Returns the correct discount amount for cart item total is greater then the minSpend.', () => {
      const cartItems = [
         {
            productId: 'icbm',
            name: 'ICBM',
            price: 2000,
            quantity: 1,
         },
         {
            productId: 'rs',
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 1,
         },
      ];

      const expectedResult = {
         cartItems: [
            {
               productId: 'icbm',
               name: 'ICBM',
               price: 2000,
               quantity: 1,
               discountPrice: null,
            },
            {
               productId: 'rs',
               name: 'Rusty spoon',
               price: 4.95,
               quantity: 1,
               discountPrice: null,
            },
         ],
         totalPrice: 2004.95,
         totalDiscount: 300.7425,
      };

      const discountConfig = {
         code: '44F4T11',
         description: '15% discount for orders above $1500 (pre-discount)',
         type: 'BULK_SPEND',
         minSpend: 1500,
         discountPercentage: 15,
      };

      const result = applyBulkSpendDiscount(cartItems, discountConfig);

      expect(result).toEqual(expectedResult);
   });
});
