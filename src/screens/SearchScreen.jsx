import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import GoogleMapView from "../components/GoogleMapView";
import api from "../services/api";
import SearchList from "../components/SearchList";

const SearchScreen = () => {
  const [placeList, setPlaceList] = useState([]);

  const GetNearBySearchPlace = (value) => {
    api.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);

  return (
    <View>
      <View className="absolute z-30 top-6 left-14">
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapView placeList={placeList} head="" width={1} height={0.89} />
      <View style={{ position: "absolute", zIndex: 20, bottom: 80 }}>
        <SearchList placeList={placeList} />
      </View>
    </View>
  );
};

export default SearchScreen;
