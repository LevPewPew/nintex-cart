import { handleActions } from 'redux-actions';
import { RequestStatus } from './request-status';

export const initialProductApiState = {
   status: RequestStatus.NOT_STARTED,
   products: null,
   error: null,
};

export const productApiActions = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   HAVE_PRODUCTS: 'HAVE_PRODUCTS',
   FAILED_TO_GET_PRODUCTS: 'FAILED_TO_GET_PRODUCTS',
};

export const productApiReducer = handleActions(
   {
      [productApiActions.GET_PRODUCTS]: (state) => {
         return {
            ...state,
            status: RequestStatus.LOADING,
         };
      },
      [productApiActions.HAVE_PRODUCTS]: (state, action) => {
         return {
            ...state,
            status: RequestStatus.SUCCESS,
            products: action.products,
         };
      },
      [productApiActions.FAILED_TO_GET_PRODUCTS]: (state, action) => {
         return {
            ...state,
            status: RequestStatus.FAILURE,
            error: action.error,
         };
      },
   },
   initialProductApiState,
);
