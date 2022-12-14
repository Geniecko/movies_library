import React from 'react';
import { Route, Routes as RoutesWrapper, Navigate } from 'react-router-dom';
import SearchEnginePage from '../pages/SearchEnginePage';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../constants/routes';
import FavourtiesPage from '../pages/FavouritesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import WatchListPage from '../pages/WatchListPage';
import WatchedPage from '../pages/WatchedPage';
import RatedPage from '../pages/RatedPage';

const Routes = () => (
  <RoutesWrapper>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/" element={<Navigate replace to={ROUTES.SEARCH_ENGINE} />} />

    <Route path={ROUTES.SEARCH_ENGINE} element={<SearchEnginePage />} />
    <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetailsPage />} />
    <Route path={ROUTES.WATCH_LIST} element={<WatchListPage />} />
    <Route path={ROUTES.FAVOURITES} element={<FavourtiesPage />} />
    <Route path={ROUTES.WATCHED} element={<WatchedPage />} />
    <Route path={ROUTES.RATED} element={<RatedPage />} />
  </RoutesWrapper>
);

export default Routes;
