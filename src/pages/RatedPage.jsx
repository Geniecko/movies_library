import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList/MovieList';

const pageTitle = {
  title: 'Rated',
  subtitle: 'Here you will find rated movies and series',
};

const RatedPage = () => {
  const ratedObject = useSelector((store) => store.rated);
  const [rated, setRated] = useState(ratedObject);
  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={rated} setMovies={setRated} />
    </>
  );
};

export default RatedPage;
