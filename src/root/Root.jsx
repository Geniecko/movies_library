import React from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Nav from '../components/Navigation/Nav';
import Routes from '../routes/Routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <AppContainer>
        <Nav isLogged />
        <ContentContainer>
          <Routes />
        </ContentContainer>
      </AppContainer>
    </MainTemplate>
  </BrowserRouter>
);

const AppContainer = styled.div`
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
`;

const ContentContainer = styled.main`
  padding: 84px 16px 24px 16px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.pageBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 92px 32px 32px 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 32px 32px 232px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 40px 40px 40px 290px;
  }
`;

export default Root;
