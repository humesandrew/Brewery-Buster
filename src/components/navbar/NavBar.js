import React, { useContext} from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


import AppBar from "@mui/material/AppBar";
import { SearchContext } from '../../context/SearchContext';
import "./navbar.css";

export default function NavBar() {
  const { search } = useContext(SearchContext);
  return (
    <Box sx={{ flexGrow: 1, letterSpacing: 3 }}>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor: "#242423"}}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing: 10, fontWeight: 'bold' }}>
            Brewery-Buster
          </Typography>
       Showing results for: {search}
          
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
