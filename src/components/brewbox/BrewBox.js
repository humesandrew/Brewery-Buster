import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import "./brewbox.css";

import Box from "@mui/material/Box";

export default function BrewBox() {
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276",
        },
    };
    const { isLoading, data, error } = useFetch(
        "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_city=Denver&per_page=10", options, []);
        console.log(data);
  return (
    <Box>
        <h1>Breweries in: Denver </h1>
      {isLoading && <div>Finding you some breweries...</div>}
      {error && (
        <div>{`There is a problem fetching the brewery data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </Box>
  );
}
