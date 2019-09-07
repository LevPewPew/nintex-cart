import * as React from 'react';
import PropTypes from 'prop-types';
import { BasePage } from './base-page';
import { ProductList } from '../products/products-list';

export const ShoppingCart = () => {
   const heading = 'Great Workflow Deals on Now';
   const subHeading = 'Check out our products and special deals.';

   return (
      <BasePage heading={heading} subHeading={subHeading}>
         <ProductList />
         <div className="products-container">Cart</div>
      </BasePage>
   );
};

ShoppingCart.propTypes = {
   className: PropTypes.string,
};

ShoppingCart.displayName = 'ShoppingCart';
