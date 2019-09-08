import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCodes } from '../../redux/thunks/get-promo-code';
import { GetRequestStatusForView } from '../../redux/request-status';
import { cartActions } from '../../redux/reducers/cart-reducer';
import { Cart } from './cart';
import { createCartDiscountManager } from '../../cart-discount-manager';

export const CartController = () => {
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

   return (
      <>
         {loading && 'Loading ...'}
         {haveResult && (
            <Cart removeFromCart={removeFromCart} setSelectedPromoCode={setSelectedPromoCode} cartData={cartData} />
         )}
         {isError && `Some thing went wrong: ${error}`}
      </>
   );
};

CartController.displayName = 'CartController';
