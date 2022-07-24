import React from 'react';
import Header from '../components/Header';

const pageTitles = {
  title: 'Search Engine',
  subtitle: 'Enter the name of the movie you are looking for',
};

const SearchEngine = () => (
  <Header title={pageTitles.title} subtitle={pageTitles.subtitle} />
);

export default SearchEngine;
