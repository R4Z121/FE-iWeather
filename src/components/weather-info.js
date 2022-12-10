/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from "react";

export default function WeatherInfo(props) {
  const Geocode = props.geocode;
  Geocode.fromLatLng(props.lat, props.lng).then(
    (response) => {
      //const address = response.results[0].formatted_address;
      let street, route, regency, city, state, country;

      street = response.results[0].address_components[0].long_name;
      route = response.results[0].address_components[1].long_name;
      regency = response.results[0].address_components[2].long_name;
      city = response.results[0].address_components[3].long_name;
      state = response.results[0].address_components[4].long_name;
      country = response.results[0].address_components[5].long_name;

      document.getElementById("lokasi").innerHTML = street + ", " + regency + ", " + state;

    }
  ).catch(err => {
    alert('Ga ada bang');
  });
  return (
    <div id="card" className="flex justify-between rounded-md p-3 sm:p-5 w-full bg-app-black text-white gap-3">
      <h1 className="text-base sm:text-xl w-2/3 font-bold" id="lokasi">Address, Location</h1>
      <div className="flex gap-1 p-1">
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
