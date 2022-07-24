import React from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import SearchEnginePage from '../pages/SearchEnginePage';
import SignInPage from '../pages/SignInPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => (
  <RoutesWrapper>
    <Route path="*" element={<NotFoundPage />} />

    <Route path="/" element={<SearchEnginePage />} />
    <Route path="/sign-in" element={<SignInPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </RoutesWrapper>
);

export default Routes;
