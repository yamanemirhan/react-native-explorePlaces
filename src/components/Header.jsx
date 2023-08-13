import { View, Image, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image source={require("../../assets/logo.png")} className="w-14 h-14" />
      <View>
        <Text className="ml-6 text-3xl text-purple-600">Explore Places</Text>
      </View>
    </View>
  );
};

export default Header;
