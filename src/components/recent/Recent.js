import * as React from "react";
import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CitiesContext } from "../../context/CitiesContext";

export default function Recent() {
  const { cities } = useContext(CitiesContext);

  return (
    <Accordion sx={{ ml: "30px", marginRight: "0px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Recent</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ ml: "20px" }}>
        {cities.length === 0 ? (
          <Typography>No recent cities found.</Typography>
        ) : (
          cities.map((city) => (
            <div key={city.id}>
              <Typography>{city.name}</Typography>
              <Typography>{city.state}</Typography>
            </div>
          ))
        )}
      </AccordionDetails>
    </Accordion>
  );
}
