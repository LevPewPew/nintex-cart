import { discountTypes } from './discount-types';
import { getCartTotal } from './cart-utils';

// Discount dose not apply or cart is empty.
export const canApplyBulkSpendDiscountToCart = (cartItems, discountConfig) => {
   return getCartTotal(cartItems) >= discountConfig.minSpend;
};

// Returns discount amount on total purchase price.
export const getBulkSpendDiscount = (cartItems, discountConfig) => {
   if (discountConfig && discountConfig.type !== discountTypes.BULK_SPEND) {
      throw new Error('Incorrect discount config supplied.');
   }

   if (!canApplyBulkSpendDiscountToCart(cartItems, discountConfig)) {
      return 0;
   }

   const totalPrice = getCartTotal(cartItems);

   return totalPrice * (discountConfig.discountPercentage / 100);
};
