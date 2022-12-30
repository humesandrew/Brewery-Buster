import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AppBar from "@mui/material/AppBar";
import "./searchbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <TextField fullWidth id="outlined-basic" label="Where would you like to see breweries?" variant="outlined" sx={{ backgroundColor: 'white'}}/>
          
         <div>
          <Accordion sx={{ ml: '20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recent Searches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         This will be local storage results mapped
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      </div>
      
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
