import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  return (
    <div>
    <div className="map">
    <MapContainer
  className="markercluster-map"
  center={[51.0, 19.0]}
  zoom={4}
  maxZoom={18}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
</MapContainer>
    </div>
    </div>
  );
}

export default Map;