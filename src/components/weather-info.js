/* eslint-disable default-case */
import React, { useState } from "react";

export default function WeatherInfo(props) {
  const Geocode = props.geocode;
  const [locationAddress, setLocationAddress] = useState('');

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
      <h1 className="text-base sm:text-xl w-full font-bold" id="lokasi">{locationAddress}</h1>
    </div>
  );
}
