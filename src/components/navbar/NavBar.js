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
      <AppBar position="fixed" >
        <Toolbar sx={{backgroundColor: "#242423", height: "75px", position: "fixed", top: 0, width: "100%", margin: "0 auto"}}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing: 10, fontWeight: 'bold' }}>
            Brewery-Buster
          </Typography>
          <div className='resultsDiv'>
       Showing results for: {search}
       </div>
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
