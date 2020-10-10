import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 .container-list {
    max-width: 400px;
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    margin: auto;
  }

  .container-flex-row {
    display: flex;
    justify-content: space-between;
  }

  .list-group-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .list-group-item {
    position: relative;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  
  @media only screen and (max-width: 768px) {
  .container-list {
      margin: inherit;
    }
  }

`;
 
export default GlobalStyle;