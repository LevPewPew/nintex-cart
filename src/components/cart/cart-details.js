import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const PriceDetails = ({ discountPrice, price }) => {
   if (discountPrice) {
      return <>discounted to ${discountPrice.toFixed(2)} each</>;
   }
   return <>${price.toFixed(2)} each</>;
};

export const ItemTotalPrice = ({ quantity, discountPrice, price }) => {
   const unitPrice = discountPrice || price;
   const totalPrice = (quantity * unitPrice).toFixed(2);
   return <>${totalPrice}</>;
};

PriceDetails.displayName = 'PriceDetails';

export const CartDetailsView = ({ className, removeFromCart, cartData }) => {
   const { cartItems, totalPrice, totalDiscount } = cartData;

   return (
      <div className={`${className} cart-details`}>
         {cartItems.map((cartItem) => (
            <div
               className="cart-item"
               id={`cart-item-${cartItem.productId}`}
               key={cartItem.productId}
            >
               <span>
                  {cartItem.name} x {cartItem.quantity}&nbsp;
                  <PriceDetails price={cartItem.price} discountPrice={cartItem.discountPrice} />
               </span>
               <span>
                  <ItemTotalPrice
                     quantity={cartItem.quantity}
                     price={cartItem.price}
                     discountPrice={cartItem.discountPrice}
                  />
                  &nbsp;
                  <button onClick={() => removeFromCart(cartItem.productId)}>X</button>
               </span>
            </div>
         ))}
         {cartData.totalDiscount > 0 && (
            <div className="total-discount total-container">
               <span>Discount:</span>
               <span className="total-price">${cartData.totalDiscount.toFixed(2)}</span>
            </div>
         )}
         <div className="total-price-row total-container">
            <span>Total Price:</span>
            <span className="total-price">${cartData.totalPrice.toFixed(2)}</span>
         </div>
      </div>
   );
};

export const CartDetails = styled(CartDetailsView)`
   width: 100%;

   .cart-details {
      width: 100%;
      flex-direction: row;
   }

   .cart-item {
      max-width: 400px;
      display: flex;
      justify-content: space-between;
   }

   .total-container {
      max-width: 400px;
      display: flex;
      justify-content: flex-end;
      padding-top: 15px;
   }

   .total-price {
      width: 100px;
      padding: 0 27px;
      text-align: right;
   }
`;

CartDetails.propTypes = {
   className: PropTypes.string,
   removeFromCart: PropTypes.func.isRequired,
   cartData: PropTypes.object.isRequired,
};

CartDetails.displayName = 'ProductSelector';
