/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

function AppMap(props) {
  const [centerOverlay, setCenterOverlay] = useState([]);
  const data = props.data;

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

  useEffect(() => {
    if (!map) return
    const bounds = new window.google.maps.LatLngBounds({ lat: props.lat, lng: props.lng });
    map.fitBounds(bounds);
    setMap(map);
  }, [props.lat, props.lng, map])

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
      >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
        {/* {
          data.map(info => {
            return <OverlayView
              key={Math.random()}
              position={{ lat: info.latitude, lng: info.longtitude }}
              mapPaneName={OverlayView.OVERLAY_LAYER}>
              <div className='bg-red-800 p-5 rounded-full'>
                <img className='w-9 h-9' src={`${process.env.PUBLIC_URL}/img/${info.weather}.png`} alt="" />
              </div>
            </OverlayView>
          })
        } */}
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(AppMap);