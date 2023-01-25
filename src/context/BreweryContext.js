import { createContext } from "react";
const initialState = {
    brewery: {
      name: 'Denver',
      latitude: '39.7',
      longitude: '104.9'
    }
  };
export const BreweryContext = createContext(initialState);