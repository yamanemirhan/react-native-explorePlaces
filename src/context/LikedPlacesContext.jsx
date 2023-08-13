import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const LikedPlacesContext = createContext();

export const useLikedPlaces = () => {
  return useContext(LikedPlacesContext);
};

export const LikedPlacesProvider = ({ children }) => {
  const [likedPlaces, setLikedPlaces] = useState([]);

  useEffect(() => {
    // Load liked places from AsyncStorage on initialization
    const loadLikedPlaces = async () => {
      try {
        const storedLikedPlaces = await AsyncStorage.getItem("likedPlacesss");
        if (storedLikedPlaces) {
          setLikedPlaces(JSON.parse(storedLikedPlaces));
        }
      } catch (error) {
        console.error("Error loading liked places:", error);
      }
    };

    loadLikedPlaces();
  }, []);

  const addLikedPlace = async (place) => {
    const updatedLikedPlaces = [...likedPlaces, place];
    await AsyncStorage.setItem(
      "likedPlaces",
      JSON.stringify(updatedLikedPlaces)
    );
    setLikedPlaces(updatedLikedPlaces);
  };

  const removeLikedPlace = async (placeId) => {
    const updatedLikedPlaces = likedPlaces.filter(
      (place) => place.place_id !== placeId
    );
    await AsyncStorage.setItem(
      "likedPlaces",
      JSON.stringify(updatedLikedPlaces)
    );
    setLikedPlaces(updatedLikedPlaces);
  };

  return (
    <LikedPlacesContext.Provider
      value={{ likedPlaces, addLikedPlace, removeLikedPlace }}
    >
      {children}
    </LikedPlacesContext.Provider>
  );
};
