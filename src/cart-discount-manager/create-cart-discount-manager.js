import { applyMultiBuyDiscountToCart } from './multi-buy-discount';
import { applyBulkSpendDiscount } from './bulk-spend-discount';
import { discountTypes } from './discount-types';

const discountHandlers = {
   [discountTypes.MULTI_BUY]: applyMultiBuyDiscountToCart,
   [discountTypes.BULK_SPEND]: applyBulkSpendDiscount,
};

export const createCartDiscountManager = (discounts) => {
   return discounts.reduce((discountManager, discount) => {
      const discountHandler = discountHandlers[discount.type];
      if (discountHandler) {
         discountManager[discount.code] = (cartItems) => discountHandler(cartItems, discount);
      } else {
         console.log('Warning: unknown discount type', discount.type);
      }
      return discountManager;
   }, {});
};
