import { productApiActions } from '../product-api-reducer';
import { fetchProducts } from '../../apis/fetch-products';

export const getProducts = async (dispatch) => {
   dispatch({
      type: productApiActions.GET_PRODUCTS,
   });

   try {
      const result = await fetchProducts();
      dispatch({
         type: productApiActions.HAVE_PRODUCTS,
         products: result,
      });
   } catch (error) {
      dispatch({
         type: productApiActions.FAILED_TO_GET_PRODUCTS,
         error: error,
      });
   }
};
