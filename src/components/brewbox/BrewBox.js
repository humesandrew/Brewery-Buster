import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./brewbox.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BrewBox() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.BREWAPI,
    },
  };
  const { isLoading, data, error } = useFetch(
    "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_city=Denver&per_page=20",
    options,
    []
  );
  const [city, setCurrentCity] = useState("Denver");
  console.log(data);
  return (
    <Box className="brewBox" sx={{height: '70vh'}}>
      <h1>Breweries in: {city} </h1>
      {isLoading && <div>Finding you some breweries...</div>}
      {error && (
        <div>{`There is a problem fetching the brewery data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <Box sx={{ flexGrow: 1 }}>
            <Grid>
              <Grid item xs={12} key={id}>
                <Button variant="outlined" fullWidth className="brewButton" sx={{ margin: '0px 0px 5px -30px', color: 'black'}}>{name}</Button>
              </Grid>
              </Grid>
            </Box>
          ))}
      </ul>
    </Box>
  );
}


// <Button key={id} variant="outlined">
// <h3>{name}</h3>
// </Button>