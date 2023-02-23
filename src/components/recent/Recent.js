import * as React from "react";
import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import { CitiesContext } from "../../context/CitiesContext";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};



export default function Recent() {
  const { cities } = useContext(CitiesContext);
  const uniqueCities = [...new Set(cities)]; // remove duplicate values

  return (
    <Accordion sx={{}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Recent</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{}}>
        {uniqueCities.length === 0 ? (
          <Typography>No recent cities found.</Typography>
        ) : (
          uniqueCities.map((city) => (
            <div key={city.id}>
            
            <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
     
      >
        <Button sx={{ color: "black" }} size="small">{<Typography variant="subtitle1">{city.name}</Typography>}</Button>
      </ButtonGroup>
               
               
                
               
              </div>
              
            
          ))
        )}
      </AccordionDetails>
    </Accordion>
  );
}
