import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from 'react-google-maps';


const MapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    {props.places.map(place => (
      <Marker
        key={place.name}
        position={{lat: place.lat, lng: place.lng}}
        title={place.name}
      />
    ))}
  </GoogleMap>
)));

const Map = ({locations}) => (
  <MapComponent
    className="map"
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKM45AYokEwz1P5vHnwYGRKhlN_wz8e2A"
    loadingElement={<div style={{height: '100%'}}/>}
    containerElement={<div style={{height: '400px'}}/>}
    mapElement={<div style={{height: '100%'}}/>}
    center={locations[0].center}
    zoom={locations[0].zoom}
    places={locations}
  />
);
export default Map;
