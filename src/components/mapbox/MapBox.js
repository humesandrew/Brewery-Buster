import * as React from "react";



import "./mapbox.css";



import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





export default function Bio() {
    return (
<Grid container spacing={2} className="leftBioGrid">
<Grid item md={6} sm={12} xs={12}>
  <Item sx={{height: '72vh', margin: '10px', backgroundColor: 'lightPink'}}>
    <img
      alt="Andy Humes - Junior Developer"
     
      className="andyPic"
    ></img>

    <h1>This will be the map.</h1>
    
  </Item>
</Grid>

</Grid>
    )
}