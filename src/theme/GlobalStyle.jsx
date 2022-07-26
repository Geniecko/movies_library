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
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: 'Barlow', sans-serif;
    background: ${({ theme }) => theme.color.pageBackground};
    color: ${({ theme }) => theme.color.secondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background: linear-gradient(90deg, ${({ theme }) => theme.color.secondary} 50%, ${({ theme }) => theme.color.pageBackground} 50% 100%);
    }
  }

  h1,h2,h3,h4,h5{
    font-weight: 700;
    margin: 0;
    margin-bottom: 1.6rem;
  }

  h1{
    font-size: 2.8rem;
  }

  h2{
    font-size: 2.2rem;
  }

  h3{
    font-size: 1.8rem;
  }

  p{
    font-size: 1.6rem;
    margin-bottom: 1.2rem;

    &:last-child{
      margin-bottom: 0;
    }
  }
`;

export default GlobalStyle;
