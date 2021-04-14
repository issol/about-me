import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import App from './App';
import GlobalStyle from 'assets/styles/globalstyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);
