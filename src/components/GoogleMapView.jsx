import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

const GoogleMapView = ({
  placeList,
  head = "Top Near By Places",
  width = 0.89,
  height = 0.23,
}) => {
  const [mapRegion, setMapRegion] = useState([]);

  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View className="mt-5">
      <Text className="mb-3 text-2xl font-semibold">{head}</Text>
      <View className="rounded-xl overflow-hidden">
        {location ? (
          <MapView
            className="rounded-2xl"
            style={{
              width: Dimensions.get("screen").width * width,
              height: Dimensions.get("screen").height * height,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker coordinate={mapRegion} title={"You"} />

            {placeList.map(
              (item, i) => i <= 5 && <PlaceMarker key={i} item={item} />
            )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
};

export default GoogleMapView;
