import { discountTypes } from './discount-types';
import { getCartTotal } from './cart-utils';

export const validateDiscountConfig = (discountConfig) => {
   if (!discountConfig) {
      return false;
   }
   const typeChecked = discountConfig.type !== discountTypes.BULK_SPEND;
   const minSpendChecked = typeof discountConfig.minSpend === 'number';
   const discountPercentageChecked = typeof discountConfig.discountPercentage === 'number';
   return typeChecked && minSpendChecked && discountPercentageChecked;
};

export const canApplyDiscountToCart = (cartItems, discountConfig) => {
   return getCartTotal(cartItems) >= discountConfig.minSpend;
};

const getDiscountedCart = (cartItems, discountConfig) => {
   const discountedCartItems = cartItems.map((cartItem) => {
      return {
         ...cartItem,
         discountPrice: null,
      };
   });

   const totalPriceBeforeDiscount = getCartTotal(cartItems);
   const totalDiscount = totalPriceBeforeDiscount * (discountConfig.discountPercentage / 100);
   const totalPrice = totalPriceBeforeDiscount - totalDiscount;

   return {
      cartItems: discountedCartItems,
      totalPrice,
      totalDiscount,
   };
};

// Returns discount amount on total purchase price.
export const applyBulkSpendDiscount = (cartItems, discountConfig) => {
   if (validateDiscountConfig(discountConfig)) {
      throw new Error('Invalid discount config supplied.');
   }

   if (!canApplyDiscountToCart(cartItems, discountConfig)) {
      return null;
   }

   return getDiscountedCart(cartItems, discountConfig);
};
