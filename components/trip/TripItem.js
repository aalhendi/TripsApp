
/* Imports */
import React from "react";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialIcons } from '@expo/vector-icons';
/* Components */
import { Text, TouchableOpacity, View } from "react-native"; //remove Text if you are not using it
import { Image } from "react-native";
import { ShopItemStyled } from "./styles";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { ScrollView } from "native-base";

const TripItem = ({ trip, navigation }) => {
  const ownerProfile = profileStore.profiles.find(
    (profile) => profile.id === trip.userId
  );

  return (
    // TODO: MOVE ALL STYLES TO styles.js
    <ScrollView>
      <View style={{ margin: "1%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
          style={{ flex: 1 }}
        >
          <Image
            source={{ uri: trip.image }}
            style={{ height: 100, width: 100 }}
          />
          <ShopItemStyled>{trip.title}</ShopItemStyled>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() =>
              navigation.navigate("Profile", {
                profile: ownerProfile,
              })
            }
          >
            <Text style={{ fontSize: 30 }}>{ownerProfile.username}</Text>
            <Image
              source={{ uri: ownerProfile.image }}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => tripStore.deleteTrip(trip.id)}
        >
          {authStore.user?.id === trip.userId ? (
            <FontAwesome5 name="trash" size={24} color="red" />
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TripItem;