/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function WeatherInfo(props) {
  const Geocode = props.geocode;
  const [locationAddress, setLocationAddress] = useState('');
  const [currentWeather, setCurrentWeather] = useState('clear');
  const [currentTemperatures, setCurrentTemperatures] = useState('35');

  Geocode.fromLatLng(props.lat, props.lng).then(
    (response) => {
      const [
        { long_name: street },
        { long_name: route },
        { long_name: regency }, ,
        { long_name: state }
      ] = response.results[0].address_components
      setLocationAddress(`${street}, ${route}, ${regency}, ${state}`);
    }
  );
  return (
    <div id="card" className="flex justify-between rounded-md p-3 sm:p-5 w-full bg-app-black text-white gap-3">
      <h1 className="text-base sm:text-xl w-2/3 font-bold" id="lokasi">{locationAddress}</h1>
      <div className="flex gap-1 p-1">
        <img
          src={`${process.env.PUBLIC_URL}/img/${currentWeather}.png`}
          alt="clear-weather"
          className="w-9 h-9 sm:w-14 sm:h-14"
        />
        <div>
          <h2 className="text-lg font-bold sm:text-2xl">
            {currentTemperatures}<sup>o</sup>C
          </h2>
          <p className="text-xs sm:text-base font-semibold">{currentWeather.split('_').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}</p>
        </div>
      </div>
    </div>
  );
}
