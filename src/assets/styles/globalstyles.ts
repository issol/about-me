import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  
  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    
    &.active {
        overflow: hidden;
        z-index: -1;
    }
    
  }

`;

export default GlobalStyle;
