// import {
//     createStore,
//     applyMiddleware,
// } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from './reducers';

// export function configureStore() {

//     let middleware = applyMiddleware([]);

//     if (process.env.NODE_ENV !== 'production') {
//         middleware = composeWithDevTools(middleware);
//     }

//     const store = createStore(
//         rootReducer,
//         initialState,
//         middleware,
//     );

//     if (process.env.NODE_ENV !== 'production') {
//         (window).dispatch = store.dispatch;
//     }

//     return store;
// }
