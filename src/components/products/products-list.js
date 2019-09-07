import { useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSelector } from './product-selector';
import { getProducts } from '../../redux/thunks/get-products';
import { RequestStatus } from '../../redux/request-status';

export const ProductList = () => {
   const dispatch = useDispatch();

   const { products, status, error } = useSelector((state) => state.product);

   useEffect(() => {
      dispatch(getProducts);
   }, []);

   const loading = status === RequestStatus.NOT_STARTED || status === RequestStatus.LOADING;
   const haveProducts = status === RequestStatus.SUCCESS;
   const isError = status === RequestStatus.FAILURE;

   return (
      <>
         {loading && 'Loading ...'}
         {haveProducts && <ProductSelector products={products} />}
         {isError && 'Sorry but some thing went wrong.'}
      </>
   );
};

ProductList.displayName = 'ProductList';
