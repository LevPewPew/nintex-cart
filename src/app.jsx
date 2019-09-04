import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

const them = {};

export const App = () => {
   return (
      <>
         <GlobalStyle normalize borderBox fontSourceSansPro />
         <ThemeProvider theme={them}>
            <h1>Shop</h1>
         </ThemeProvider>
      </>
   );
};

App.displayName = 'App';
