import { applyMultiBuyDiscountToCart } from './multi-buy-discount';
import { applyBulkSpendDiscount } from './bulk-spend-discount';
import { discountTypes } from './discount-types';
import { getCartTotal } from './cart-utils';

const discountHandlers = {
   [discountTypes.MULTI_BUY]: applyMultiBuyDiscountToCart,
   [discountTypes.BULK_SPEND]: applyBulkSpendDiscount,
};

export const creatCartWithNoDiscount = (cartItems) => {
   const cartItemsWithDiscountPriceField = cartItems.map((cartItem) => {
      return {
         ...cartItem,
         discountPrice: null,
      };
   });

   const totalPrice = getCartTotal(cartItems);

   return {
      cartItems: cartItemsWithDiscountPriceField,
      totalPrice,
      totalDiscount: 0,
   };
};

export const createEmptyCart = () => {
   return {
      cartItems: [],
      totalPrice: 0,
      totalDiscount: 0,
   };
};

export const createCartDiscountManager = (discounts) => {
   const discountManager =
      discounts &&
      discounts.reduce((discountManager, discount) => {
         const discountHandler = discountHandlers[discount.type];
         if (discountHandler) {
            discountManager[discount.code] = (cartItems) => discountHandler(cartItems, discount);
         } else {
            console.log('Warning: unknown discount type', discount.type);
         }
         return discountManager;
      }, {});

   return (promoCode, cartItems) => {
      console.log('cartItems', cartItems);
      if (!cartItems || cartItems.length === 0) {
         return createEmptyCart();
      }

      if (!promoCode || !discountManager) {
         return creatCartWithNoDiscount(cartItems);
      }

      return discountManager[promoCode](cartItems);
   };
};
