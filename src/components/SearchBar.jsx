import React, { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState();

  return (
    <View>
      <LinearGradient
        colors={["gray", "transparent"]}
        style={{ width: Dimensions.get("screen").width * 0.7 }}
        className="mx-auto"
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text className="text-3xl text-center w-full pt-1 text-blue-700">
            Search Places
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 5,
            flexDirection: "row",
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search"
            style={{ backgroundColor: "white" }}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SearchBar;
