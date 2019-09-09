import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const PromoSelectorView = ({ className, promoCodes, setSelectedPromoCode }) => {
   // Don't display anything if there are no promo codes.
   if (!promoCodes || promoCodes.length < 1) {
      return null;
   }

   return (
      <div className={`${className} promo-selector`}>
         <p>
            <strong>Choose from your available promo codes to get the best deal.</strong>
         </p>
         {promoCodes.map((promoCode) => (
            <div className="promo-item" id={`promo-button-${promoCode.code}`} key={promoCode.code}>
               <button onClick={() => setSelectedPromoCode(promoCode.code)}>
                  <strong>{promoCode.code}</strong>
               </button>
               <div>{promoCode.description}</div>
            </div>
         ))}
      </div>
   );
};

export const PromoSelector = styled(PromoSelectorView)`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 10px;
   flex-grow: 1;

   .promo-item {
      display: flex;
      flex-direction: row;
      padding: 3px 0;
      max-width: 500px;
   }

   button {
      min-width: 80px;
      max-height: 20px;
      margin-right: 10px;
   }
`;

PromoSelector.propTypes = {
   promoCodes: PropTypes.arrayOf(PropTypes.object),
   setSelectedPromoCode: PropTypes.func.isRequired,
};

PromoSelector.displayName = 'PromoSelector';
