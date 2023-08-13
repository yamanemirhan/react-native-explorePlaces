import { ScrollView } from "react-native";
import Header from "../components/Header";
import GoogleMapView from "../components/GoogleMapView";
import CategoryList from "../components/CategoryList";
import api from "../services/api";
import { useContext, useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { UserLocationContext } from "../context/UserLocationContext";

const HomeScreen = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      GetNearBySearchPlace("restaurant");
    }
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    api
      .nearByPlace(location?.coords.latitude, location?.coords.longitude, value)
      .then((res) => {
        setPlaceList(res.data.results);
      });
  };

  return (
    <ScrollView className="p-5 flex-1">
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList && placeList.length > 0 && <PlaceList placeList={placeList} />}
    </ScrollView>
  );
};

export default HomeScreen;
