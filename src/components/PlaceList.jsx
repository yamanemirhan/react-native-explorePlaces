import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ placeList, isHorizontal = false }) => {
  const navigation = useNavigation();

  const onPlaceClick = (item) => {
    navigation.navigate("place-detail", { place: item });
  };

  return (
    <View className="mb-6">
      <Text className="text-xl font-semibold mt-2">
        Found {placeList.length} Places
      </Text>

      <FlatList
        data={placeList}
        horizontal={isHorizontal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            <PlaceItem place={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaceList;
