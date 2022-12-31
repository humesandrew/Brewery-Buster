import * as React from "react";



import "./brewbox.css";



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

<Grid item md={5} sm={12} xs={12}>
  <Item sx={{height: '72vh', margin: '10px', backgroundColor: 'lightYellow'}}>
    <img
      alt="Andy Humes - Junior Developer"
     
      className="andyPic"
    ></img>

    <h1>This will be the brewery information.</h1>
    
  </Item>
</Grid>


    )
}