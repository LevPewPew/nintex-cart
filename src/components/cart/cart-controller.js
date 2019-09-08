import { useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCodes } from '../../redux/thunks/get-promo-code';
import { GetRequestStatusForView } from '../../redux/request-status';
import { cartActions } from '../../redux/reducers/cart-reducer';
import { Cart } from './cart';

export const CartController = () => {
   const dispatch = useDispatch();

   const { promoCodes, status, error } = useSelector((state) => state.promoCodes);

   useEffect(() => {
      dispatch(getPromoCodes);
   }, []);

   const removeFromCart = (productId) =>
      dispatch({
         type: cartActions.REMOVE_FROM_CART,
         productId,
      });

   const { loading, haveProducts, isError } = GetRequestStatusForView(status);

   return (
      <>
         {loading && 'Loading ...'}
         {haveProducts && <Cart removeFromCart={removeFromCart} />}
         {isError && `Some thing went wrong: ${error}`}
      </>
   );
};

CartController.displayName = 'CartController';
