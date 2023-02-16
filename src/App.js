import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import MainBox from "./components/mainbox/MainBox";
import { SearchContext } from "./context/SearchContext";
import { BreweryContext } from "./context/BreweryContext";
import { CitiesContext } from "./context/CitiesContext";

function App() {
  const [search, setSearch] = React.useState("Denver");
  const [brewery, setBrewery] = React.useState({});
  const [cities, setCities] = React.useState([]);
  return (
    <div className="maindiv">
      <CitiesContext.Provider value={{ cities, setCities }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <BreweryContext.Provider value={{ brewery, setBrewery }}>
          <NavBar />
          <SearchBar />
          <div>
            <MainBox />
          </div>
        </BreweryContext.Provider>
      </SearchContext.Provider>
      </CitiesContext.Provider>
    </div>
  );
}

export default App;
