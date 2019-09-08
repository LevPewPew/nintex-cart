import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProductItemTemplate = ({ className, product, onClick, addToCart, selected }) => {
   const [quantity, setQuantity] = useState('1');
   const itemId = `product-item-${product.productId}`;

   const onButtonClick = (event) => {
      event.preventDefault();
      addToCart(product.productId, Number(quantity));
   };

   const onItemClick = (event) => {
      if (!event.defaultPrevented) {
         setQuantity(1);
         onClick(event);
      }
   };

   return (
      <li className={`${className} product-item`} id={itemId} role="button" onClick={onItemClick}>
         <div className="item-label item-row">
            <span>{product.name}</span>
            <span>${product.price}</span>
         </div>
         {selected && (
            <div className={'product-input-container item-row'}>
               <input
                  type="number"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  onClick={(event) => event.preventDefault()}
               />
               <button onClick={onButtonClick}>Add to Cart</button>
            </div>
         )}
      </li>
   );
};

export const ProductListItem = styled(ProductItemTemplate)`
   padding: 10px;
   border-radius: 5px;
   margin: 5px 0;

   .item-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }

   button {
      white-space: nowrap;
      border-radius: 4px;
   }

   input {
      width: 50px;
      border-radius: 4px;
   }

   .product-input-container {
      padding-top: 10px;
   }

   ${(props) => props.selected && `background-color: ${props.theme.highlight};`}
   ${(props) => props.selected && `color: ${props.theme.lightText};`}

   :hover {
      background-color: ${(props) => props.theme.highlight};
      color: ${(props) => props.theme.lightText};
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

   const selectedHandler = (productId) => {
      setSelected(productId === selected ? '' : productId);
   };

   return (
      <div className={`${className} product-selector`}>
         <h3>Select a Product</h3>
         <ul className="product-list">
            {products.length &&
               products.map((product) => (
                  <ProductListItem
                     key={product.productId}
                     product={product}
                     onClick={() => selectedHandler(product.productId)}
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
   max-width: 500px;
   margin: 10px;
   background-color: ${(props) => props.theme.highlight};
   border-radius: 5px;

   h3 {
      text-align: center;
      color: ${(props) => props.theme.lightText};
   }

   .product-list {
      background-color: ${(props) => props.theme.sectionBackground};
      flex-direction: column;
      list-style-type: none;
      border-radius: 5px;
      margin: 10px;
      padding: 5px 10px;
   }
`;

ProductSelector.propTypes = {
   className: PropTypes.string,
   products: PropTypes.arrayOf(PropTypes.object).isRequired,
   addToCart: PropTypes.func,
};

ProductSelector.displayName = 'ProductSelector';
