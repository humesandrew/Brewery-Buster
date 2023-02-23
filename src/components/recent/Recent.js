import * as React from "react";
import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

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
    <Accordion sx={{ ml: "30px", marginRight: "0px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Recent</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ ml: "20px" }}>
        {uniqueCities.length === 0 ? (
          <Typography>No recent cities found.</Typography>
        ) : (
          uniqueCities.map((city) => (
            
              <List sx={style} component="nav" aria-label="mailbox folders">
                <div key={city.id}>
                <ListItem button>
                  <ListItemText primary={<Typography>{city.name}</Typography>} />
                </ListItem>
                </div>
                <Divider />
              </List>
              
            
          ))
        )}
      </AccordionDetails>
    </Accordion>
  );
}
