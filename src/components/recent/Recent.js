import * as React from "react";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Recent() {
    
    return (
        <Accordion sx={{ ml: "30px", marginRight: '0px'}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Recent</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ ml: "20px" }}>
    Result
    </AccordionDetails>
  </Accordion>
    )}