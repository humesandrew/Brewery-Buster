import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "@mui/material/AppBar";

import { useContext, useState, useEffect } from "react";
import { SearchContext } from '../../context/SearchContext';
import "./searchbar.css";

import Recent from "../recent/Recent";

export default function SearchBar() {
 const { setSearch } = useContext(SearchContext);
 const [localStorageResults, setLocalStorageResults] = useState([]);
 useEffect(() => {
  const storedResults = JSON.parse(localStorage.getItem("results") || "[]");
  setLocalStorageResults(storedResults);
}, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="searchBar">
        <Toolbar sx={{backgroundColor: "#333533"}}>
          
          <TextField
            fullWidth
           id='inputField'
           placeholder="Where would you like to see breweries?"
            sx={{ backgroundColor: "white", borderRadius: '10px'}}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
              const getSearch = document.getElementById('inputField');
              let cities = JSON.parse(localStorage.getItem("cities")) || [];
              cities.push(getSearch.value.trim());
              
              localStorage.setItem("cities", JSON.stringify(cities));
              console.log(localStorage);
              setSearch(getSearch.value.trim())}}}
            
           
          />
          <div className='submitButton'>
          <Button variant='primary' onClick={async () => {
            const getSearch = document.getElementById('inputField');
            let cities = JSON.parse(localStorage.getItem("cities")) || [];
            cities.push(getSearch.value.trim());
            
            localStorage.setItem("cities", JSON.stringify(cities));
            console.log(localStorage);
            setSearch(getSearch.value.trim())}}>Submit</Button>
          </div>

<div>
            <Recent />
</div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
