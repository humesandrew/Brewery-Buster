import React, { createContext, useState, useEffect } from "react";

export const CitiesContext = createContext([]);

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setCities(storedCities);
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
