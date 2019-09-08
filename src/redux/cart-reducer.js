import { handleActions } from 'redux-actions';

export const initialCartState = {};

export const cartActions = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const addToCartReducer = (state, action) => {
   const { productId, quantity } = action;
   return {
      ...state,
      [productId]: state[productId] ? state[productId] + quantity : quantity,
   };
};

const removeFromCartReducer = (state, action) => {
   const { productId } = action;
   if (state[productId]) {
      return state;
   }

   const newState = { ...state };
   delete newState[productId];
   return copiedState;
};

export const cartReducer = handleActions(
   {
      [cartActions.ADD_TO_CART]: addToCartReducer,
      [cartActions.REMOVE_FROM_CART]: removeFromCartReducer,
   },
   initialCartState,
);
