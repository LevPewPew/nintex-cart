import { handleActions } from 'redux-actions';

export const initialCartState = [];

export const cartActions = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const addToCartReducer = (state, action) => {
   const { productId, quantity, name, price } = action;

   const indexOfCartItem = state.findIndex((cartItem) => cartItem.productId === action.productId);
   const newState = [...state];

   if (indexOfCartItem > -1) {
      newState[indexOfCartItem] = {
         ...newState[indexOfCartItem],
         quantity: newState[indexOfCartItem].quantity + action.quantity,
      };
   } else {
      newState.push({ productId, name, quantity, price });
   }

   return newState;
};

const removeFromCartReducer = (state, action) => {
   const { productId } = action;
   return state.filter((cartItem) => cartItem.productId !== productId);
};

export const cartReducer = handleActions(
   {
      [cartActions.ADD_TO_CART]: addToCartReducer,
      [cartActions.REMOVE_FROM_CART]: removeFromCartReducer,
   },
   initialCartState,
);
