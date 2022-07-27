import React from 'react';
import { Route, Routes as RoutesWrapper, Navigate } from 'react-router-dom';
import SearchEnginePage from '../pages/SearchEnginePage';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../constants/routes';
import FavourtiesPage from '../pages/FavouritesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import WatchListPage from '../pages/WatchListPage';

const Routes = () => (
  <RoutesWrapper>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/" element={<Navigate replace to={ROUTES.MOVIES} />} />

    <Route path={ROUTES.MOVIES} element={<SearchEnginePage />} />
    <Route path={ROUTES.MOVIES_DETAILS} element={<MovieDetailsPage />} />
    <Route path={ROUTES.WATCH_LIST} element={<WatchListPage />} />
    <Route path={ROUTES.FAVOURITES} element={<FavourtiesPage />} />
  </RoutesWrapper>
);

export default Routes;
