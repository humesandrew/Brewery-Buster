import React from "react";

import BrewBox from "../brewbox/BrewBox";
import MapBox from "../mapbox/MapBox";

import "./mainbox.css";

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

export default function MainBox() {
  return (
    <Grid
      container
      spacing={2}
      className="leftBioGrid"
      sx={{
        marginTop: "auto",
        height: '100%',
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Grid item md={6} sm={12} xs={12}>
        <Item sx={{ backgroundColor: "#E8EDDF", marginTop: "135px" }}>
          <BrewBox />
        </Item>
      </Grid>
      <Grid item md={6} sm={12} xs={12} className="rightBioGrid">
        <Item sx={{ backgroundColor: "#E8EDDF", marginTop: "135px" }}>
          <MapBox />
        </Item>
      </Grid>
    </Grid>
  );
}
