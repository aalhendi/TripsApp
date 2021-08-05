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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: "2%",
          width: "100%",
        }}
      >
        <ScrollView>
          <Heading style={{ alignSelf: "center" }}>
            Trip count: {tripCount}
          </Heading>
          <Image
            source={{ uri: profile.image }}
            style={{
              borderRadius: 50,
              padding: 1,
              height: 100,
              width: 100,
              alignSelf: "center",
            }}
            alt={"ProfilePicture"}
          />
          <Heading>{profile.bio}</Heading>
          <TripList inProfile={true} navigation={navigation} />
        </ScrollView>
        <FAB
          style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
          medium
          icon="plus"
          onPress={() =>
            navigation.navigate("ProfileEdit", { profile: profile })
          }
        />
      </View>
    </>
  );
};

export default observer(Profile);
