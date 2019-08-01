import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

const places = [
   {
    id:'1',
    title: 'Varshava',
     name:'Varshava',
    lat: 52.22977,
    lng: 21.01178
  },
   {
    id:'2',
    title: 'Giżycko',
    lat: 54.0381100,
    lng: 21.7644100
  },
   {
    id:'3',
    title: 'Minsk',
    lat: 53.9,
    lng: 27.56659
  }
];


const googleMap = () => {
  return (
    <Map className="map"
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKM45AYokEwz1P5vHnwYGRKhlN_wz8e2A"
         loadingElement={<div style={{ height: `100%` }}/>}
         containerElement={<div style={{ height: `400px` }}/>}
         mapElement={<div style={{ height: `100%` }}/>}
         center={{
           lat: 	53.1333,
           lng: 23.1643
         }}
         zoom={7}
         places={places}
    />
  );
};
export default googleMap;
