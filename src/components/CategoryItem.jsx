import { View, Text, Image } from "react-native";
import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <View className="items-center justify-center my-2 mx-1 w-24 h-24 bg-red-200 rounded-sm shadow-sm shadow-black">
      <Image source={category.icon} className="w-14 h-14" />
      <Text>{category.name}</Text>
    </View>
  );
};

export default CategoryItem;
