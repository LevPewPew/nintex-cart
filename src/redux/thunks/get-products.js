import { productApiActions } from './product-api-reducer';

export const getProducts = async dispatch => {
   dispatch({
      type: productApiActions.GET_PRODUCTS,
   });
};
