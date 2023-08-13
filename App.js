import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/TabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserLocationContext } from "./src/context/UserLocationContext";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as Location from "expo-location";
import { LikedPlacesProvider } from "./src/context/LikedPlacesContext";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <LikedPlacesProvider>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </LikedPlacesProvider>
      </UserLocationContext.Provider>
    </SafeAreaView>
  );
}
