import { promoCodeApiActions } from '../reducers/promo-code-api-reducer';
import { fetchPromoCodes } from '../../apis/fetch-promo-codes';

export const getPromoCodes = async (dispatch) => {
   dispatch({
      type: promoCodeApiActions.GET_PROMO_CODE,
   });

   try {
      const promoCodes = await fetchPromoCodes();
      dispatch({
         type: promoCodeApiActions.HAVE_PROMO_CODE,
         promoCodes,
      });
   } catch (error) {
      console.log('getPromoCode failed with: ', error);
      dispatch({
         type: promoCodeApiActions.FAILED_TO_GET_PROMO_CODE,
         error,
      });
   }
};
