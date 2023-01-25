import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Map from "../map/Map";
import { BreweryContext } from "../../context/BreweryContext";
import "./mapbox.css";

export default function MapBox() {
  const { brewery } = useContext(BreweryContext);
  return (
    
    <Box sx={{maxHeight: '68vh'}}>
      
      {brewery && <div><h2>{brewery.name}</h2></div>}
      {!brewery && <h1>Mapbox</h1>}
      <Map sx={{maxHeight: '68vh'}}/>
    </Box>
  );
}