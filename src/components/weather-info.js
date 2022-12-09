/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from "react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBvqILfEOQhJNbBfabJSDgE1vfT-fFBvU0");
Geocode.setLanguage("id");
Geocode.setRegion("id");
Geocode.setLocationType("ROOFTOP");

export default function WeatherInfo(props) {
  Geocode.fromLatLng(props.lat, props.lng).then(
    (response) => {
      const address = response.results[0].formatted_address;
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      console.log(city, state, country);
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <div
      id="card"
      className="flex justify-between rounded-md p-3 sm:p-5 bg-app-black text-white gap-3"
    >
      <h1 className="text-base sm:text-xl font-bold">Address, Location</h1>
      <div className="flex gap-1">
        <img
          src={`${process.env.PUBLIC_URL}/img/clear.png`}
          alt="clear-weather"
          className="w-9 h-9 sm:w-14 sm:h-14"
        />
        <div>
          <h2 className="text-lg font-bold sm:text-2xl">
            35<sup>o</sup>C
          </h2>
          <p className="text-xs sm:text-base font-semibold">Sunny</p>
        </div>
      </div>
    </div>
  );
}
