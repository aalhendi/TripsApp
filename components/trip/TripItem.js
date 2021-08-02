
/* Imports */
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
/* Components */
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { ShopItemStyled } from "./styles";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

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
      <TouchableOpacity>
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
        {/* make button nav to new screen */}
        {authStore.user ?.id === trip.userId ? (
        <MaterialIcons onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        name="update" 
        size={24} 
        color="black" 
        />
         ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TripItem;