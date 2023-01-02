import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import "./map.css";
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  return (
    <div className="map" style={{height: '60vh'}}>
   
    <MapContainer
  className="markercluster-map"
  style={{ height: "100%", minHeight: "100%" }}
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
  );
}

export default Map;