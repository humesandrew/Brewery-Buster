import React, { createContext, useState, useEffect } from "react";

export const CitiesContext = createContext({ cities: []});

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setCities(storedCities);
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const updateCities = (newCities) => {
    setCities([...newCities]);
  };

  return (
    <CitiesContext.Provider value={{ cities, updateCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};


export default CitiesContextProvider;
