import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList/MovieList';

const pageTitle = {
  title: 'Watch List',
  subtitle: 'Here you will find movies waiting to be watched',
};

const WatchListPage = () => {
  const watchListObject = useSelector((store) => store.watchList);
  const [watchList, setWatchList] = useState(watchListObject);

  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={watchList} setMovies={setWatchList} />
    </>
  );
};

export default WatchListPage;
