/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

function AppMap() {
  const [center, setCenterMap] = useState({ lat: -6.176389, lng: 106.823037 });
  const [setIsCenterLoaded] = useState(false)

  useEffect(() => {
    getUserPosition();
  }, []);

  const getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCenterMap({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBvqILfEOQhJNbBfabJSDgE1vfT-fFBvU0"
  });

  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  };

  const onUnmount = function callback(map) {
    setMap(null)
  };

  return isLoaded ? (
    <div className='w-full bg-app-grey min-h-30' id='map'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={{ lat: center.lat, lng: center.lng }}
      ></GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(AppMap);