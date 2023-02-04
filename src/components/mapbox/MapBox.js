import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Map from "../map/Map";
import { BreweryContext } from "../../context/BreweryContext";
import "./mapbox.css";

export default function MapBox() {
  const { brewery } = useContext(BreweryContext);
  const lat = parseFloat(brewery.latitude);
  const lng = parseFloat(brewery.longitude);
  return (
    <Box>
      {brewery && !isNaN(lat) && !isNaN(lng) ? (
        <div>
          <h2>
            <a href={brewery.website_url} target="_blank" rel="noreferrer">
              {brewery.name}
            </a>
          </h2>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h2>No coordinates given.</h2>
          <h2>
            <a href={brewery.website_url} target="_blank" rel="noreferrer">
              {brewery.website_url}
            </a>
          </h2>
        </div>
      )}

      <Map/>
    </Box>
  );
}
