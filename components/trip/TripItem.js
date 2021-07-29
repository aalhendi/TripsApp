import React from "react";
//components
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { ShopItemStyled } from "./styles";
//stores
// import tripStore from "../../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  return (
    <View>
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
