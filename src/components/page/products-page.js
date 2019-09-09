import * as React from 'react';
import PropTypes from 'prop-types';
import { BasePage } from './base-page';
import { ProductList } from '../products/products-list';
import styled from 'styled-components';
import { CartController } from '../cart/cart-controller';

const CartContainer = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
`;

CartContainer.displayName = 'CartContainer';

export const ProductsPage = () => {
   const heading = 'Great Workflow Deals';
   const subHeading = 'Check out our products and special deals.';

   return (
      <BasePage heading={heading} subHeading={subHeading}>
         <CartContainer>
            <ProductList />
            <CartController />
         </CartContainer>
      </BasePage>
   );
};

ProductsPage.propTypes = {
   className: PropTypes.string,
};

ProductsPage.displayName = 'ProductsPage';
