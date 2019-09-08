import { applyMultiBuyDiscountToCart, haveRequiredItemsInCart } from './multi-buy-discount';

describe('Have Required Items In Cart', () => {
   it('Returns true when all items needed are in cart.', () => {
      const cartItems = [
         {
            productId: 'rub',
            name: 'Rubber mallet',
            price: 30,
            quantity: 2,
         },
         {
            productId: 'rs',
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 9,
         },
      ];

      const discountConfig = {
         code: 'FF9543D1',
         description: 'Reduces the rubber mallet price to $20 a unit when at least 10 rusty spoons are purchased',
         type: 'MULTI_BUY',
         requiredInBasket: [
            {
               productId: 'rs',
               minItems: 1,
            },
         ],
         discounts: [
            {
               productId: 'rub',
               price: 20,
            },
         ],
      };

      const result = haveRequiredItemsInCart(cartItems, discountConfig);

      expect(result).toBe(true);
   });
});

describe('Apply Multi Buy discount.', () => {
   it("Returns null if discount can't be applied.", () => {
      const cartItems = [
         {
            productId: 'rub',
            name: 'Rubber mallet',
            price: 30,
            quantity: 2,
         },
         {
            productId: 'rs',
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 9,
         },
      ];

      const discountConfig = {
         code: 'FF9543D1',
         description: 'Reduces the rubber mallet price to $20 a unit when at least 10 rusty spoons are purchased',
         type: 'MULTI_BUY',
         requiredInBasket: [
            {
               productId: 'rs',
               minItems: 10,
            },
         ],
         discounts: [
            {
               productId: 'rub',
               price: 20,
            },
         ],
      };

      const result = applyMultiBuyDiscountToCart(cartItems, discountConfig);

      expect(result).toBe(null);
   });

   it('Returns cart with discount applied when it can be applied.', () => {
      const cartItems = [
         {
            productId: 'rub',
            name: 'Rubber mallet',
            price: 30,
            quantity: 2,
         },
         {
            productId: 'rs',
            name: 'Rusty spoon',
            price: 4.95,
            quantity: 10,
         },
         {
            productId: 'db',
            name: 'Dog bowl',
            price: 8.95,
            quantity: 1,
         },
      ];

      const discountConfig = {
         code: 'FF9543D1',
         description: 'Reduces the rubber mallet price to $20 a unit when at least 10 rusty spoons are purchased',
         type: 'MULTI_BUY',
         requiredInBasket: [
            {
               productId: 'rs',
               minItems: 10,
            },
         ],
         discounts: [
            {
               productId: 'rub',
               price: 20,
            },
         ],
      };

      const expectedResult = {
         cartItems: [
            {
               productId: 'rub',
               name: 'Rubber mallet',
               price: 30,
               quantity: 2,
               discountPrice: 20,
            },
            {
               productId: 'rs',
               name: 'Rusty spoon',
               price: 4.95,
               quantity: 10,
               discountPrice: null,
            },
            {
               productId: 'db',
               name: 'Dog bowl',
               price: 8.95,
               quantity: 1,
               discountPrice: null,
            },
         ],
         totalPrice: 98.45,
         totalDiscount: 20,
      };

      const result = applyMultiBuyDiscountToCart(cartItems, discountConfig);

      expect(result).toEqual(expectedResult);
   });
});
