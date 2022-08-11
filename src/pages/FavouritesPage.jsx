import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList/MovieList';

const pageTitle = {
  title: 'Favourites',
  subtitle: 'Here you will find favourites movies and series',
};

const FavouritesPage = () => {
  const favouritesObject = useSelector((store) => store.favourites);
  const [favourites, setFavourites] = useState(favouritesObject);

  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={favourites} setMovies={setFavourites} />
    </>
  );
};

export default FavouritesPage;
