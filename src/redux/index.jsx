import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productApiReducer } from './product-api-reducer';
import { promoCodeApiReducer } from './promo-code-api-reducer';
import { cartReducer } from './cart-reducer';

export const rootReducer = combineReducers({
   products: productApiReducer,
   promoCodes: promoCodeApiReducer,
   cart: cartReducer,
});

export function configureStore() {
   let middleware = applyMiddleware(thunk);

   if (process.env.NODE_ENV !== 'production') {
      middleware = composeWithDevTools(middleware);
   }

   const store = createStore(rootReducer, {}, middleware);

   if (process.env.NODE_ENV !== 'production') {
      window.dispatch = store.dispatch;
   }

   return store;
}
