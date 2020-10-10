import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 .container-list {
    display: grid;
    grid-gap: 3vw;
    grid-template-columns: repeat(12, 1fr);
    overflow: unset;
    word-wrap: break-word;
  }

  .container-row {
    display: grid
  }

  .col-6 {
    grid-column: span 6;
  }
`;
 
export default GlobalStyle;