import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CarView = ({ className, removeFromCart }) => {
   return 'stuff';
};

export const Cart = styled(CarView)`
   align-content: center;
   width: 50%;
`;

Cart.propTypes = {
   className: PropTypes.string,
   promoCodeManager: PropTypes.object.isRequired,
   removeFromCart: PropTypes.func.isRequired,
};

Cart.displayName = 'ProductSelector';
