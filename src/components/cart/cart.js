import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isProperty } from '@babel/types';

export const CarView = ({ className, removeFromCart, setSelectedPromoCode }) => {
   return (
      <div className={`${className} cart-view`}>
         <button onClick={() => setSelectedPromoCode('RRD4D32')}>Select Promo Code</button>
      </div>
   );
};

export const Cart = styled(CarView)`
   align-content: center;
   width: 50%;
`;

Cart.propTypes = {
   className: PropTypes.string,
   promoCodes: PropTypes.arrayOf(PropTypes.object),
   removeFromCart: PropTypes.func.isRequired,
   setSelectedPromoCode: PropTypes.func.isRequired,
   cartData: PropTypes.object.isRequired,
};

Cart.displayName = 'ProductSelector';
