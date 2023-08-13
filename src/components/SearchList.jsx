import { View } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import SearchItem from "./SearchItem";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const SearchList = ({ placeList }) => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        colors={["white", "transparent"]}
        style={{ padding: 16, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <SearchItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
};

export default SearchList;
