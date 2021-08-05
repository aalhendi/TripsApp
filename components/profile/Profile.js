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

  let trips = [];

  if (tripStore.trips) {
    trips = tripStore.trips.filter((trip) => trip.userId === profile.id);
  }

  // TODO: MOVE STYLES TO styles.js
  return (
    <>
      <ProfileWrapper>
        <ScrollView style={{ width: "100%" }}>
          <CountStyled> Trip count: {trips.length}</CountStyled>
          <ProfileImageStyled
            source={{ uri: profile.image }}
            alt={"ProfilePicture"}
          />
          <BioStyled>{profile.bio}</BioStyled>
          <TripList inProfile={true} navigation={navigation} trips={trips} />
        </ScrollView>
        <ProfileAdd
          color="white"
          small
          icon="account-edit-outline"
          onPress={() =>
            navigation.navigate("ProfileEdit", { profile: profile })
          }
        />
      </ProfileWrapper>
    </>
  );
};

export default observer(Profile);
