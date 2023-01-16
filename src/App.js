import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import MainBox from "./components/mainbox/MainBox";
import { SearchContext } from './context/SearchContext';
import { BreweryContext } from './context/BreweryContext';


function App() {
  const [search, setSearch] = React.useState("Denver");
  const [brewery, setBrewery] = React.useState(null);
  return (
    <div className="maindiv">
      <SearchContext.Provider value={{search, setSearch}}>
      <BreweryContext.Provider value={{brewery, setBrewery}}>
      <NavBar />
      <SearchBar />
      <div>
      
        <MainBox  />
        
      </div>
      </BreweryContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
