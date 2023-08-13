import {
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "./PlaceDetailItem";
import GoogleMapView from "./GoogleMapView";
import { Ionicons } from "@expo/vector-icons";

const PlaceDetail = () => {
  const [place, setPlace] = useState([]);

  const param = useRoute().params;

  useEffect(() => {
    setPlace(param.place);
  }, []);

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });

    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-slate-400 flex-1">
      <PlaceDetailItem
        place={place}
        onDirectionClick={() => onDirectionClick()}
      />
      <View className="flex items-center mb-3">
        <GoogleMapView placeList={[place]} head="Location" />
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          className="flex flex-row justify-center items-center rounded-3xl mt-4 border p-1 bg-gray-200"
        >
          <Ionicons name="navigate-circle-outline" size={30} color="blue" />

          <Text className="text-blue-500">Get Direction on Google Map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
