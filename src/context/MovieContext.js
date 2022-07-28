import { createContext } from 'react';

const defaultObject = {
  searchValue: '',
};

export const MovieSearchContext = createContext(defaultObject);
