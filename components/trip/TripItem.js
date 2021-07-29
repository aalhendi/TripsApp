import React from "react";
//components
import { Text, View } from "react-native";
import { Image } from "react-native";
import { List } from "native-base";
import { ShopItemStyled } from "./styles";
//stores
// import tripStore from "../../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  console.log(trip.image);
  return (
    <View>
      <Image source={{ uri: trip.image }} style={{ height: 100, width: 100 }} />
      <ShopItemStyled>{trip.title}</ShopItemStyled>
      <ShopItemStyled>{trip.description}</ShopItemStyled>
    </View>
  );
};

export default TripItem;
