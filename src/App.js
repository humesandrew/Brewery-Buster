import './App.css';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';
import BrewBox from './components/brewbox/BrewBox';
import MapBox from './components/mapbox/MapBox';

import Box from "@mui/material/Box";

function App() {
  return (
    <div>
    <NavBar>
    </NavBar>
    <SearchBar>
    </SearchBar>
  <div>
  <BrewBox></BrewBox>
   <MapBox></MapBox>
  
    </div>
    </div>
  );
}


export default App;
