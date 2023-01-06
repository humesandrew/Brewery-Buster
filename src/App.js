import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import MainBox from "./components/mainbox/MainBox";
import { SearchContext } from './context/SearchContext';


function App() {
  const [search, setSearch] = React.useState("Denver");
 
  return (
    <div className="maindiv">
      <SearchContext.Provider value={{search, setSearch}}>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <div>
      
        <MainBox  />
        
      </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
