import { handleActions } from 'redux-actions';
import { RequestStatus } from './request-status';

export const initialPromoCodeApiState = {
   status: RequestStatus.NOT_STARTED,
   promoCodes: null,
   error: null,
};

export const promoCodeApiActions = {
   GET_PROMO_CODE: 'GET_PROMO_CODE',
   HAVE_PROMO_CODE: 'HAVE_PROMO_CODE',
   FAILED_TO_GET_PROMO_CODE: 'FAILED_TO_GET_PROMO_CODE',
};

export const promoCodeApiReducer = handleActions(
   {
      [promoCodeApiActions.GET_PROMO_CODE]: (state) => {
         return {
            ...state,
            status: RequestStatus.LOADING,
         };
      },
      [promoCodeApiActions.HAVE_PROMO_CODE]: (state, action) => {
         return {
            ...state,
            status: RequestStatus.SUCCESS,
            promoCodes: action.promoCodes,
         };
      },
      [promoCodeApiActions.FAILED_TO_GET_PROMO_CODE]: (state, action) => {
         return {
            ...state,
            status: RequestStatus.FAILURE,
            error: action.error,
         };
      },
   },
   initialPromoCodeApiState,
);
