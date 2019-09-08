import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ProductsPage } from './components/page/products-page';

const GlobalStyle = createGlobalStyle`
   html, body {
      height: 100%;
   }

   body {
      min-width: 375px;
      margin: 0;
      padding: 0;
      height: 100vh;
      font-family: sans-serif;
   }

   #root {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
   }

   .highlight-container {
      /* theme.highlight */
      background-color: #d8412f;

      /* theme.lightText */
      color: #fcfdfe;
      padding: 10px;
   }
`;

const theme = {
   pageBackground: '#fcfdfe',
   highlight: '#d8412f',
   hover: '#fe7a47',
   sectionBackground: '#f5ca99',
   headerBackground: '#745C54',
   lightText: '#fcfdfe',
};

export const App = () => {
   return (
      <>
         <GlobalStyle normalize borderBox fontSourceSansPro />
         <ThemeProvider theme={theme}>
            <ProductsPage />
         </ThemeProvider>
      </>
   );
};

App.displayName = 'App';
