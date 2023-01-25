import React, { useContext } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

import { SearchContext } from "../../context/SearchContext";
import { BreweryContext } from "../../context/BreweryContext";
import "./map.css";

// import { showDataOnMap } from "./util";


function Map({ center, zoom }) {

  const { brewery } = useContext(BreweryContext);


  return (
    <div className="map" style={{ height: "60vh" }}>
    

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
            <Marker position={[51.0, 19.0]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

      </MapContainer>
    </div>
  );
}

export default Map;
