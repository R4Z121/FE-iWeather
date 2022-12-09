/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

function AppMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBvqILfEOQhJNbBfabJSDgE1vfT-fFBvU0"
  });

  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds({ lat: props.lat, lng: props.lng });
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
        center={{ lat: props.lat, lng: props.lng }}
      ></GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(AppMap);