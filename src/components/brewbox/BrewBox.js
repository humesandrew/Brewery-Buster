import * as React from "react";
import { useEffect, useContext } from "react";
import useFetch from "react-fetch-hook";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { SearchContext } from "../../context/SearchContext";
import { BreweryContext } from "../../context/BreweryContext"; //
import "./brewbox.css";



export default function BrewBox() {
  const { search } = useContext(SearchContext);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276",
  //   },
  // };
  const { isLoading, data, error } = useFetch(
    "https://api.openbrewerydb.org/v1/breweries?by_city=" +
      search,
    // options,
    []
  );



  // const [ brewery, setBrewery ] = useState(null); //
  // as soon as a made this context and not useState, it said 'setBrewery is not a fxn'//
  // but if i revert back to useState it console logs the state of brewery with name, lat, lon, //

  const { brewery, setBrewery } = useContext(BreweryContext);
  useEffect(() => {
    console.log(brewery);
  }, [brewery]);

  return (
    <Box sx={{ height: "68vh" }}>
      <h2>Breweries in {search} </h2>
      {isLoading && <div>Finding you some breweries...</div>}
   
      {error && (
        <div>{`There is a problem fetching the brewery data - ${error}`}</div>
      )}
      <div className="brewBox">
        <ul>
          {data &&
            data.map(({ id, name, longitude, latitude, brewery_type, website_url, phone, street, state, city }) => (
              <Box sx={{ flexGrow: 1 }}>
                <Grid>
                  <Grid item xs={12} key={id}>
                    <Button
                      variant="outlined"
                      fullWidth
                      className="brewButton"
                      sx={{ margin: "0px 0px 5px -50px", color: "black" }}
                      onClick={async () => {
                        setBrewery({ name, latitude, longitude, brewery_type, website_url, phone, street, state, city });
                      }}
                    >
                      {name}
                   
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </ul>
      </div>
    </Box>
  );
}
