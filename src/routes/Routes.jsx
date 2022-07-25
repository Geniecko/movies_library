import React from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import SearchEnginePage from '../pages/SearchEnginePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../constants/routes';
import FavourtiesPage from '../pages/FavouritesPage';

const Routes = () => (
  <RoutesWrapper>
    <Route path="*" element={<NotFoundPage />} />

    <Route path={ROUTES.HOME} element={<SearchEnginePage />} />
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    <Route path={ROUTES.FAVOURITES} element={<FavourtiesPage />} />
  </RoutesWrapper>
);

export default Routes;
