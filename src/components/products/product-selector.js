import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProductItemTemplate = ({ className, product, onClick, addToCart, selected }) => {
   const [quantity, setQuantity] = useState('1');

   return (
      <li
         className={`${className} product-item`}
         id={`product-item-${product.productId}`}
         role="button"
         onClick={onClick}>
         <div className="item-label">
            <span>{product.name}</span>
            <span>${product.price}</span>
         </div>
         {selected && (
            <>
               <div>
                  <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                  <button onClick={() => addToCart(product.productId, Number(quantity))}>Add to Cart</button>
               </div>
            </>
         )}
      </li>
   );
};

export const ProductListItem = styled(ProductItemTemplate)`
   .item-label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }
   :hover {
   }
`;

ProductListItem.propTypes = {
   product: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
   addToCart: PropTypes.func.isRequired,
   selected: PropTypes.bool,
};

ProductListItem.displayName = 'ProductListItem';

export const ProductListView = ({ className, products, addToCart }) => {
   const [selected, setSelected] = useState('');

   return (
      <div className={`${className} product-selector`}>
         <ul className="product-list">
            {products.length &&
               products.map((product) => (
                  <ProductListItem
                     key={product.productId}
                     product={product}
                     onClick={() => setSelected(product.productId)}
                     selected={product.productId === selected}
                     addToCart={addToCart}
                  />
               ))}
         </ul>
      </div>
   );
};

export const ProductSelector = styled(ProductListView)`
   align-content: center;
   width: 50%;
   .product-list {
      flex-direction: column;
      list-style-type: none;
      margin: 0;
      padding: 10px;
   }
`;

ProductSelector.propTypes = {
   className: PropTypes.string,
   products: PropTypes.arrayOf(PropTypes.object).isRequired,
   addToCart: PropTypes.func,
};

ProductSelector.displayName = 'ProductSelector';
