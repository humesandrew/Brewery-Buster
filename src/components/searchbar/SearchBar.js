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
import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { CitiesContext } from "../../context/CitiesContext";
import Recent from "../recent/Recent";
import './searchbar.css';

export default function SearchBar() {
  const { setSearch } = useContext(SearchContext);
  const { cities, setCities } = useContext(CitiesContext);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("results") || "[]");
    setCities(storedResults);
  }, [setCities]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const getSearch = document.getElementById("inputField");
      let updatedCities = [...cities, getSearch.value.trim()];
      localStorage.setItem("cities", JSON.stringify(updatedCities));
      setCities(updatedCities);
      setSearch(getSearch.value.trim());
    }
  };

  const handleSubmit = () => {
    const getSearch = document.getElementById("inputField");
    let updatedCities = [...cities, getSearch.value.trim()];
    localStorage.setItem("cities", JSON.stringify(updatedCities));
    setCities(updatedCities);
    setSearch(getSearch.value.trim());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="searchBar">
        <Toolbar sx={{ backgroundColor: "#333533" }}>
          <TextField
            fullWidth
            id="inputField"
            placeholder="Where would you like to see breweries?"
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
            onKeyDown={handleEnter}
          />
          <div className="submitButton">
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div>
            <Recent />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
