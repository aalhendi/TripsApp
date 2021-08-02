/* Imports */
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
/* Components */
import { Text, TouchableOpacity, View } from "react-native"; //remove Text if you are not using it
import { Image } from "react-native";
import { ShopItemStyled } from "./styles";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  return (
    // TODO: MOVE ALL STYLES TO styles.js
    <View style={{ margin: "1%" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Image
          source={{ uri: trip.image }}
          style={{ height: 100, width: 100 }}
        />
        <ShopItemStyled>{trip.title}</ShopItemStyled>
        <ShopItemStyled>{trip.description}</ShopItemStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => tripStore.deleteTrip(trip.id)}>
        {authStore.user?.id === trip.userId ? (
          <FontAwesome5 name="trash" size={24} color="red" />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TripItem;
