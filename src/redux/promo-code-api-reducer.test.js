import { promoCodeApiReducer, promoCodeApiActions, initialPromoCodeApiState } from './promo-code-api-reducer';

describe('Promo Code Reducer', () => {
   it('Should change to loading state while request is flight.', () => {
      const state = promoCodeApiReducer(initialPromoCodeApiState, {
         type: promoCodeApiActions.GET_PROMO_CODE,
      });
      expect(state).toEqual({
         status: 'LOADING',
         promoCodes: null,
         error: null,
      });
   });

   it('Store the promoCode when the request succeeds.', () => {
      const state = promoCodeApiReducer(initialPromoCodeApiState, {
         type: promoCodeApiActions.HAVE_PROMO_CODE,
         promoCodes: [
            {
               code: 'RRD4D32',
               description: '10% discount for orders above $1000 (pre-discount)',
               type: 'BULK_SPEND',
               minSpend: 1000,
               discountPercentage: 10,
            },
         ],
      });
      expect(state).toEqual({
         status: 'SUCCESS',
         promoCodes: [
            {
               code: 'RRD4D32',
               description: '10% discount for orders above $1000 (pre-discount)',
               type: 'BULK_SPEND',
               minSpend: 1000,
               discountPercentage: 10,
            },
         ],
         error: null,
      });
   });

   it('Store the error if the API request fails.', () => {
      const state = promoCodeApiReducer(initialPromoCodeApiState, {
         type: promoCodeApiActions.FAILED_TO_GET_PROMO_CODE,
         error: 'Man! This is bad.',
      });
      expect(state).toEqual({
         status: 'FAILURE',
         promoCodes: null,
         error: 'Man! This is bad.',
      });
   });
});
