import { createContext } from "react";

const initialState = {
    search: {
        city: 'Denver',
        latitude: '39.7',
        longitude: '104.9'
    },
  };
export const SearchContext = createContext(initialState);