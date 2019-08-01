import React, { Component } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

const googleMap = () => {
  return (
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key="
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      center={{ lat: -24.9923319, lng: 135.2252427 }}
      zoom={4}
      places={places}
    />
  );
};
export default googleMap
