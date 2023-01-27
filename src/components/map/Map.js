import React, { useContext, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

import { SearchContext } from "../../context/SearchContext";
import { BreweryContext } from "../../context/BreweryContext";
import "./map.css";

// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  const { search } = useContext(SearchContext);
  const { brewery } = useContext(BreweryContext);

  useEffect(() => {
    if (brewery && search) {
        console.log(brewery.name, brewery.latitude, brewery.longitude);
        console.log(search);
        console.log(brewery.latitude);
        console.log(brewery.longitude);
    }else{
        console.log("no data")
    }
}, [brewery, search]);
const initialLat = 39.7;
const initialLng = -104.9
const centerLat = brewery ? brewery.latitude : initialLat;
const centerLng = brewery ? brewery.longitude : initialLng;
  
  return (
    <div className="map" style={{ height: "60vh" }}>
      <MapContainer
        className="markercluster-map"
        style={{ height: "100%", minHeight: "100%" }}
        center={[39.7392, -104.9903]}
        zoom={4}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[39.7392, -104.9903]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
