export const isCartItem = (item) => {
   const nameCheck = typeof item.name === 'string';
   const priceCheck = typeof item.price === 'number';
   const quantityChick = typeof item.quantity === 'number';
   return nameCheck && priceCheck && quantityChick;
};

// Return the total price of all items in cartItems
export const getCartTotal = (cartItems) => {
   if (!Array.isArray(cartItems)) {
      return 0;
   }

   return cartItems.reduce((total, item) => {
      if (!isCartItem(item)) {
         throw new Error('Invalid cart item found in getCartTotal.');
      }
      return (total += item.price * item.quantity);
   }, 0);
};
