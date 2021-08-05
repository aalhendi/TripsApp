/* Imports */
import React from "react";
import { View, Heading, Spinner, Image } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
/* Components */
import TripList from "../trip/TripList";
/* State and Store */
import { observer } from "mobx-react-lite";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

/*Styles*/
import {
  ProfileWrapper,
  CountStyled,
  ProfileImageStyled,
  BioStyled,
  ProfileAdd,
} from "./styles";

const Profile = ({ navigation, route }) => {
  // TODO: APP CRASHES WHEN NEW USER REGISTERS WHEN EVALUATING PROFILE

  if (authStore.loading || profileStore.loading) {
    return <Spinner />;
  }

  const { profile } = route.params;

  let tripCount = 0;
  if (tripStore.trips) {
    tripCount = tripStore.trips.filter(
      (trip) => trip.userId === profile.id
    ).length;
  }

  // TODO: MOVE STYLES TO styles.js
  return (
    <>
      <ProfileWrapper>
        <ScrollView>
          <CountStyled> Trip count: {tripCount}</CountStyled>
          <ProfileImageStyled
            source={{ uri: profile.image }}
            alt={"ProfilePicture"}
          />
          <BioStyled>{profile.bio}</BioStyled>
          <TripList inProfile={true} navigation={navigation} />
        </ScrollView>
        <ProfileAdd
          color="white"
          small
          icon="plus"
          onPress={() =>
            navigation.navigate("ProfileEdit", { profile: profile })
          }
        />
      </ProfileWrapper>
    </>
  );
};

export default observer(Profile);
