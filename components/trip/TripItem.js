/* Imports */
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

/* Styles */
import {
  TripTitleStyled,
  ItemWrapper,
  ItemTouchableOpacity,
  TripImage,
  ProfileButton,
  ProfileNameText,
  ProfileImage,
  DeleteOpacityStyled,
} from "./styles";

/* Components */
import { Text, TouchableOpacity, View } from "react-native";
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
    <ScrollView>
      <ItemWrapper>
        <ItemTouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
          style={{ flex: 1 }}
        >
          <TripImage source={{ uri: trip.image }} />
          <TripTitleStyled>{trip.title}</TripTitleStyled>
          <ProfileButton
            onPress={() =>
              navigation.navigate("Profile", {
                profile: ownerProfile,
              })
            }
          >
            <ProfileNameText>{ownerProfile.username}</ProfileNameText>
            <ProfileImage source={{ uri: ownerProfile.image }} />
          </ProfileButton>
        </ItemTouchableOpacity>

        <DeleteOpacityStyled onPress={() => tripStore.deleteTrip(trip.id)}>
          {authStore.user?.id === trip.userId && (
            <FontAwesome5 name="trash" size={20} color="red" />
          )}
        </DeleteOpacityStyled>
      </ItemWrapper>
    </ScrollView>
  );
};

export default TripItem;
