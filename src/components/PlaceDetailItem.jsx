import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import share from "../services/share";

const PlaceDetailItem = ({ place, onDirectionClick }) => {
  return (
    <View className="p-5 bg-slate-300">
      <Text className="text-3xl">{place.name}</Text>
      <View className="flex flex-row items-center gap-1 mt-1">
        <AntDesign name="star" size={22} color="yellow" />
        <Text className="text-xl">{place.rating}</Text>
      </View>
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
          className="w-full h-40 rounded-md mt-3"
        />
      ) : null}

      <Text className="mt-2 text-gray-600 text-base">
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place?.opening_hours ? (
        <Text>
          {place?.opening_hours?.open_now == true ? "(Open)" : "(Closed)"}
        </Text>
      ) : null}
      <View className="flex flex-row gap-5 mt-2">
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          className="flex flex-row items-center gap-1"
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => share.SharePlace(place)}
          className="flex flex-row items-center gap-1"
        >
          <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlaceDetailItem;
