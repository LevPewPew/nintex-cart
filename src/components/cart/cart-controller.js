import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCodes } from '../../redux/thunks/get-promo-code';
import { GetRequestStatusForView } from '../../redux/request-status';
import { cartActions } from '../../redux/reducers/cart-reducer';
import { Cart } from './cart';
import { createCartDiscountManager } from '../../cart-discount-manager';
import { PromoSelector } from './promo-selector';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CartControllerBase = ({ className }) => {
   const dispatch = useDispatch();
   const [selectedPromoCode, setSelectedPromoCode] = useState('');

   const { promoCodes, status, error } = useSelector((state) => state.promoCodes);
   const cartItems = useSelector((state) => state.cart);

   const cartDiscountManager = useMemo(() => createCartDiscountManager(promoCodes), [promoCodes]);
   const cartData = useMemo(() => cartDiscountManager(selectedPromoCode, cartItems), [
      cartDiscountManager,
      selectedPromoCode,
      cartItems,
   ]);

   useEffect(() => {
      dispatch(getPromoCodes);
   }, []);

   const removeFromCart = (productId) =>
      dispatch({
         type: cartActions.REMOVE_FROM_CART,
         productId,
      });

   const { loading, haveResult, isError } = GetRequestStatusForView(status);

   console.log('cartData', cartData);
   console.log('promo code selected', selectedPromoCode);

   return (
      <div className={`${className} cart-controller`}>
         {loading && 'Loading ...'}
         {haveResult && (
            <>
               <Cart
                  removeFromCart={removeFromCart}
                  cartData={cartData}
                  setSelectedPromoCode={setSelectedPromoCode}
                  selectedPromoCode={selectedPromoCode}
               />
               <PromoSelector setSelectedPromoCode={setSelectedPromoCode} promoCodes={promoCodes} />
            </>
         )}
         {isError && `Some thing went wrong: ${error}`}
      </div>
   );
};

export const CartController = styled(CartControllerBase)`
   display: flex;
   flex-direction: column;
   width: 100%;
   min-width: 400px;
   margin: 10px;
`;

CartController.propTypes = {
   className: PropTypes.string,
};

CartController.displayName = 'CardController';
