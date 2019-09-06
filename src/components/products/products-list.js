import * as React from 'react';
import styled from 'styled-components';

export const ProductListController = props => {
   return <div className={`${props.className} product-list`}></div>;
};

export const ProductList = styled(ProductListController)`
   display: flex;
   width: 100%;
   padding: 10px;
`;

ProductList.displayName('ProductList');
