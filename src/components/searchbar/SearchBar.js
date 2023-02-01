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

import { useContext } from "react";
import { SearchContext } from '../../context/SearchContext';
import "./searchbar.css";



export default function SearchBar() {
 const { setSearch } = useContext(SearchContext);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="searchBar">
        <Toolbar sx={{backgroundColor: "#333533"}}>
          <div className='submitButton'>
          <Button variant='primary' onClick={async () => {
            const getSearch = document.getElementById('inputField');
            setSearch(getSearch.value.trim())}}>Submit</Button>
          </div>
          <TextField
            fullWidth
           id='inputField'
           placeholder="Where would you like to see breweries?"
           onKeyDown={e => e.keyCode === 13 && setSearch(e.target.value.trim())}
            sx={{ backgroundColor: "white", borderRadius: '10px'}}
            // onChange={(e) => setSearch(e.target.value)}
          />

          <div>
            <Accordion sx={{ ml: "30px", marginRight: '0px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Recent Searches</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ ml: "20px" }}>
                <Typography>
                 local storage results 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
