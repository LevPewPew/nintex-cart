import { productApiReducer, productApiActions, initialProductApiState } from './product-api-reducer';

describe('Product Reducer', () => {
   it('Should change to loading state while request is flight.', () => {
      const state = productApiReducer(initialProductApiState, {
         type: productApiActions.GET_PRODUCTS,
      });
      expect(state).toEqual({
         status: 'LOADING',
         products: null,
         error: null,
      });
   });

   it('Store the product when the request succeeds.', () => {
      const state = productApiReducer(initialProductApiState, {
         type: productApiActions.HAVE_PRODUCTS,
         products: [
            {
               productId: 'wf',
               name: 'Workflow',
               price: 199.99,
            },
         ],
      });
      expect(state).toEqual({
         status: 'SUCCESS',
         products: [
            {
               productId: 'wf',
               name: 'Workflow',
               price: 199.99,
            },
         ],
         error: null,
      });
   });

   it('Store the error if the API request fails.', () => {
      const state = productApiReducer(initialProductApiState, {
         type: productApiActions.FAILED_TO_GET_PRODUCTS,
         error: 'Man! This is bad.',
      });
      expect(state).toEqual({
         status: 'FAILURE',
         products: null,
         error: 'Man! This is bad.',
      });
   });
});
