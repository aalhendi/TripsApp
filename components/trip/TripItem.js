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
    //👇🏻why do you have styles.js if you are using the inline styling?
    <View style={{ margin: "1%" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Image
          source={{ uri: trip.image }}
          style={{ height: 100, width: 100 }}
        />
        {/* 👆🏻**/}
        <ShopItemStyled>{trip.title}</ShopItemStyled>
        <ShopItemStyled>{trip.description}</ShopItemStyled>
      </TouchableOpacity>
      {/* 1.👇🏻why you are wrapping this with TouchableOpacity and the onPress is on the icon? */}
      <TouchableOpacity>
        {/*2.👇🏻Clean this up! if the user is the owner render the icon and that is it */}
        {/** you should use alerting color for trash icon not black! also alert the user before delete. */}
        {authStore.user?.id === trip.userId ? (
          <FontAwesome5
            name="trash"
            size={24}
            color="black"
            onPress={() => tripStore.deleteTrip(trip.id)}
          />
        ) : (
          <></>
        )}
        {/*2.👆🏻 */}
      </TouchableOpacity>
      {/* 1.👆🏻 */}
    </View>
  );
};

export default TripItem;
