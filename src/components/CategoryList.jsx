import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ setSelectedCategory }) => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../assets/cafe.png"),
    },
  ];

  return (
    <View className="mt-4">
      <Text className="text-xl my-1">Select Top Category</Text>

      <FlatList
        className="mx-auto"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
