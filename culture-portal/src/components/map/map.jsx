import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const Markers = props => {
  return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      {props.places.map(place => {
        return (
          <Marker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            draggable={true}
            onDragstart={() => {
              return handleDragStart();
            }}
            onDragend={() => {
              return handleDragEnd();
            }}
          />
        );
      })}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Markers));
