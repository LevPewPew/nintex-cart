import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProductItemTemplate = ({ className, product, onClick }) => {
   return (
      <li className={`${className} product-item`} id={product.id} role="button" onClick={onClick}>
         {product.name}
      </li>
   );
};

export const ProductListItem = styled(ProductItemTemplate)`
   ${(props) => (props.selected ? '@extend .highlight-container;' : '')}

   :hover {
   }
`;

ProductListItem.propTypes = {
   product: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
   selected: PropTypes.bool,
};

ProductListItem.displayName = 'ProductListItem';

export const ProductListView = ({ className, products }) => {
   const [selected, setSelected] = useState('');

   return (
      <ul className={`${className} product-list`}>
         {products.length &&
            products.map((product) => (
               <ProductListItem
                  product={product}
                  onClick={() => setSelected(product.id)}
                  selected={product.id === selected}
               />
            ))}
      </ul>
   );
};

export const ProductSelector = styled(ProductListView)`
   flex-direction: column;
`;

ProductSelector.propTypes = {
   className: PropTypes.string,
   products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductSelector.displayName = 'ProductSelector';
