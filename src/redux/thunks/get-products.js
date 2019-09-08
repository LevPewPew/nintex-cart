import { productApiActions } from '../product-api-reducer';
import { fetchProducts } from '../../apis/fetch-products';

export const getProducts = async (dispatch) => {
   dispatch({
      type: productApiActions.GET_PRODUCTS,
   });

   try {
      const products = await fetchProducts();
      dispatch({
         type: productApiActions.HAVE_PRODUCTS,
         products,
      });
   } catch (error) {
      console.log('getProduct failed with: ', error);
      dispatch({
         type: productApiActions.FAILED_TO_GET_PRODUCTS,
         error: error,
      });
   }
};
