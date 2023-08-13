import React from "react";
import { View, Text, ScrollView } from "react-native";
import PlaceItem from "../components/PlaceItem";
import { useLikedPlaces } from "../context/LikedPlacesContext";

const FavScreen = () => {
  const { likedPlaces } = useLikedPlaces();

  return (
    <ScrollView className="flex-1 p-5 bg-blue-100">
      <Text className="text-3xl text-red-500">Your Favourite Places</Text>
      <Text className="text-xl text-gray-600">
        You have {likedPlaces.length} Favourite Places
      </Text>
      <View className="flex flex-col gap-1 p-1 pb-5">
        {likedPlaces &&
          likedPlaces.map((place, index) => (
            <PlaceItem key={index} place={place} />
          ))}
      </View>
    </ScrollView>
  );
};

export default FavScreen;
