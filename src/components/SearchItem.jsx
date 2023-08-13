import { View, Text } from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchItem = ({ place }) => {
  return (
    <View
      style={{
        width: 140,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        elevation: 0.4,
      }}
      className="flex-1"
    >
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
          style={{ width: 120, height: 80, borderRadius: 10 }}
        />
      ) : (
        <Image
          source={require("./../../assets/placeholder.jpg")}
          style={{ width: 130, height: 100, borderRadius: 9 }}
        />
      )}
      <Text numberOfLines={2} style={{ fontSize: 16, marginTop: 5 }}>
        {place.name}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 13,
          marginTop: 5,
          color: "gray",
        }}
      >
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
          marginBottom: -5,
        }}
      >
        <AntDesign name="star" size={20} color="yellow" />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
};

export default SearchItem;
