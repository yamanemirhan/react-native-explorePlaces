import React from "react";
import { Marker } from "react-native-maps";

const PlaceMarker = ({ item }) => {
  return (
    <Marker
      coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      }}
      title={item.name}
    />
  );
};

export default PlaceMarker;
