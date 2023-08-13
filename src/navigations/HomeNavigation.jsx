import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PlaceDetail from "../components/PlaceDetail";

const HomeNavigation = () => {
  const isAndroid = true;

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        screenOptions={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
