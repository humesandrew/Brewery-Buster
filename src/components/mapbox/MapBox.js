import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Map from "../map/Map";
import { BreweryContext } from "../../context/BreweryContext";
import "./mapbox.css";

export default function MapBox() {
  const { brewery } = useContext(BreweryContext);

  return (
    <Box sx={{ maxHeight: "68vh" }}>
      {!brewery.name && <h1>Mapbox</h1>}
      {brewery && (
        <div>
          <h2>{brewery.name}</h2>
        </div>
      )}

      <Map sx={{ maxHeight: "68vh" }} />
    </Box>
  );
}
