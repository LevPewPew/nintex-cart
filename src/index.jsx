import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux';

import { configureStore } from './redux';
import { App } from './app';

// const store = configureStore();

ReactDOM.render(
   // <ReduxProvider store={store}>
   <div>
      <App />
   </div>,
   // </ReduxProvider>,
   document.getElementById('root'),
);
