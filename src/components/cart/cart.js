import * as React from 'react';
import styled from 'styled-components';
import { CartDetails } from './cart-details';
import PropTypes from 'prop-types';

export const CarView = ({
   className,
   removeFromCart,
   selectedPromoCode,
   setSelectedPromoCode,
   cartData,
}) => {
   const cartIsEmpty = cartData.cartItems.length < 1;
   const havePromoCode = selectedPromoCode && selectedPromoCode.length > 0;

   return (
      <div className={`${className} cart-view`}>
         <h3>Your Purchase</h3>
         {cartIsEmpty ? (
            <p>You haven't selected any products yet.</p>
         ) : (
            <>
               {havePromoCode && (
                  <div className="promo-code-used">
                     Using Promo Code: <strong>{selectedPromoCode}</strong>&nbsp;
                     <button onClick={() => setSelectedPromoCode('')}>X</button>
                  </div>
               )}
               <CartDetails cartData={cartData} removeFromCart={removeFromCart} />
            </>
         )}
      </div>
   );
};

export const Cart = styled(CarView)`
   align-content: center;
   width: 100%;
   margin: 10px;
   flex-grow: 1;
   max-width: 400px;

   .promo-code-used {
      padding: 5px 0;
   }
`;

Cart.propTypes = {
   className: PropTypes.string,
   promoCodes: PropTypes.arrayOf(PropTypes.object),
   removeFromCart: PropTypes.func.isRequired,
   setSelectedPromoCode: PropTypes.func.isRequired,
   cartData: PropTypes.object.isRequired,
};

Cart.displayName = 'ProductSelector';
