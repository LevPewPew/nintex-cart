import { discountTypes } from './discount-types';
import { getCartTotal } from './cart-utils';

export const validateDiscountConfig = (discountConfig) => {
   if (!discountConfig) {
      return false;
   }
   const typeChecked = discountConfig.type !== discountTypes.MULTI_BUY;
   const requiredInBasketChecked =
      Array.isArray(discountConfig.requiredInBasket) && discountConfig.requiredInBasket.length;
   const discountsChecked = Array.isArray(discountConfig.requiredInBasket) && discountConfig.requiredInBasket.length;

   return typeChecked && requiredInBasketChecked && discountsChecked;
};

export const haveRequiredItemsInCart = (cartItems, discountConfig) => {
   const { requiredInBasket } = discountConfig;

   return requiredInBasket.every((requiredItem) =>
      cartItems.some(
         (cartItem) => requiredItem.productId === cartItem.productId && cartItem.quantity >= requiredItem.minItems,
      ),
   );
};

// Discount dose not apply or cart is empty.
export const canApplyDiscountToCart = (cartItems, discountConfig) => {
   const { discounts } = discountConfig;

   const haveRequiredItemsInCartForDiscount = haveRequiredItemsInCart(cartItems, discountConfig);
   const someItemsInCartAreDiscounted = discounts.some((discountedItem) =>
      cartItems.some((cartItem) => discountedItem.productId === cartItem.productId),
   );

   return haveRequiredItemsInCartForDiscount && someItemsInCartAreDiscounted;
};

const getDiscountedCart = (cartItems, discountConfig) => {
   const { discounts } = discountConfig;

   const discountedCartItems = cartItems.map((cartItem) => {
      const applicableDiscount = discounts.find((discount) => discount.productId === cartItem.productId);
      return {
         ...cartItem,
         discountPrice: applicableDiscount ? applicableDiscount.price : null,
      };
   });

   const totalPrice = getCartTotal(cartItems);
   const totalPriceWithDiscount = getCartTotal(discountedCartItems);

   return {
      cartItems: discountedCartItems,
      totalPrice: totalPriceWithDiscount,
      totalDiscount: totalPrice - totalPriceWithDiscount,
   };
};

// Returns discount amount on total purchase price.
export const applyMultiBuyDiscountToCart = (cartItems, discountConfig) => {
   if (validateDiscountConfig(discountConfig)) {
      throw new Error('Invalid discount config supplied.');
   }

   if (!canApplyDiscountToCart(cartItems, discountConfig)) {
      return null;
   }

   return getDiscountedCart(cartItems, discountConfig);
};
