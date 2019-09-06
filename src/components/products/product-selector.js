import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProductItem = props => {
   return <div className={`${props.className} product-list`}></div>;
};

ProductItem.propTypes = {
   className: PropTypes.string,
   product: PropTypes.object,
   selected: PropTypes.bool,
};

ProductList.displayName('ProductItem');

export const Product = styled(ProductItem)`
   display: flex;
   width: 100%;
   padding: 10px;
`;

export const ProductSelectorView = props => {
   return <div className={`${props.className} product-list`}></div>;
};

export const ProductSelector = styled(ProductSelectorView)`
   display: flex;
   width: 100%;
   padding: 10px;
`;

ProductList.propTypes = {
   className: PropTypes.string,
   products: PropTypes.arrayOf(PropTypes.object),
   selectedProduct: PropTypes.string,
};

ProductList.displayName('ProductList');
