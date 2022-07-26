import { createContext } from 'react';

const defaultObject = {
  searchValue: '',
  setSearchValue: () => {},
};

export const MovieSearchContext = createContext(defaultObject);
