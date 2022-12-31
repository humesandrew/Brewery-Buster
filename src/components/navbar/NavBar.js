import * as React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import "./navbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, letterSpacing: 3 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing: 10 }}>
            Brewery-Buster
          </Typography>
       Showing results for: 
          
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
