import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Barlow', sans-serif;
    background-color: ${({ theme }) => theme.color.pageBackground};
  } 
`;

export default GlobalStyle;
