import * as React from "react";
import Box from "@mui/material/Box";
import Map from "../map/Map";
import "./mapbox.css";

export default function MapBox() {
  return (
    <Box sx={{maxHeight: '68vh'}}>
      <h1>Mapbox</h1>
      <Map />
    </Box>
  );
}