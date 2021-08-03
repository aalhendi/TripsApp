
/* Imports */
import React from "react";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialIcons } from '@expo/vector-icons';
/* Components */
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { ShopItemStyled } from "./styles";
/* State and Store */
// import tripStore from "../../stores/tripStore";
// import authStore from "../../stores/authStore";

//modals and do nav

const TripItem = ({navigation, trip }) => {

  return (
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
    </View>
  );
};

export default TripItem;