import React, { useContext, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

import { SearchContext } from "../../context/SearchContext";
import { BreweryContext } from "../../context/BreweryContext";
import "./map.css";

const Recenter = ({lat,lng}) => {
  const map = useMap();
  useEffect(() => {
      map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  const { search } = useContext(SearchContext);
  const { brewery } = useContext(BreweryContext);

  useEffect(() => {
    if (brewery && search) {
        console.log(brewery.name, brewery.latitude, brewery.longitude);
        console.log(search);
        console.log(parseFloat(brewery.latitude))
        console.log(parseFloat(brewery.longitude))
    }else{
        console.log("no data")
    }
}, [brewery, search]);
const initialLat = 39.7;
const initialLng = -104.9
const centerLat = brewery && parseFloat(brewery.latitude) ? parseFloat(brewery.latitude) : initialLat;
const centerLng = brewery && parseFloat(brewery.longitude) ? parseFloat(brewery.longitude) : initialLng;
  

const phoneNumber = brewery.phone;
const formattedPhoneNumber = phoneNumber ? `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}` : '';
 
return (
    <div className="map" style={{ maxHeight: "59vh" }}>
      <MapContainer
        className="markercluster-map"
        style={{ height: "100%", minHeight: "100%" }}
        center={[centerLat, centerLng]}
        
        zoom={7}
        maxZoom={18}
      ><Recenter lat={centerLat} lng={centerLng} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[centerLat, centerLng]}>
          <Popup>
            <h3>{brewery.name}</h3>{brewery.street}<br></br>{brewery.city}, {brewery.state} <br></br>{formattedPhoneNumber}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
