import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BasePage } from './base-page';

export const ShoppingCart = () => {
   return (
      <BasePage heading="Great Deals on Now" subHeading="Check out our products and special deals.">
         <div className="products-container">Products</div>
         <div className="products-container">Cart</div>
      </BasePage>
   );
};

ShoppingCart.propTypes = {
   className: PropTypes.string,
};

ShoppingCart.displayName = 'ShoppingCart';
