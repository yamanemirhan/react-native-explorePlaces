import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useLikedPlaces } from "../context/LikedPlacesContext";

const PlaceItem = ({ place }) => {
  const { likedPlaces, addLikedPlace, removeLikedPlace } = useLikedPlaces();

  const handleLike = async (place) => {
    addLikedPlace(place);
  };

  const handleUnLike = async (place) => {
    removeLikedPlace(place.place_id);
  };

  const isLiked =
    likedPlaces &&
    likedPlaces.some((likedPlace) => likedPlace.place_id === place.place_id);

  return (
    <View className="flex flex-row bg-blue-200 my-3 rounded-md">
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0",
          }}
          className="w-28 h-full rounded-l-md"
        />
      ) : (
        <Image
          source={require("./../../assets/placeholder.jpg")}
          className="w-28 h-32 rounded-l-md"
        />
      )}
      <View className="flex flex-col flex-1 pl-1">
        <Text className="text-lg">{place.name}</Text>
        <Text className="whitespace-pre text-sm text-gray-700">
          {place.formatted_address || place.vicinity}
        </Text>
        <View className="flex flex-row items-center mt-auto mb-1 ">
          <AntDesign name="star" size={22} color="yellow" />
          <Text className="text-base">{place.rating}</Text>
          <TouchableOpacity className="ml-auto mr-2">
            {isLiked ? (
              <AntDesign
                onPress={() => handleUnLike(place)}
                name="heart"
                size={22}
                color="red"
              />
            ) : (
              <AntDesign
                onPress={() => handleLike(place)}
                name="hearto"
                size={22}
                color="red"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlaceItem;
