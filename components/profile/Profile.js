/* Imports */
import React from "react";
import { View, Heading, Spinner, Image } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
/* State and Store */
import { observer } from "mobx-react-lite";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const Profile = ({ navigation }) => {
  if (authStore.loading || profileStore.loading) {
    return <Spinner />;
  }

  let tripCount = 0;
  if (tripStore.trips) {
    tripCount = tripStore.trips.filter(
      (trip) => trip.userId === authStore.user.id
    ).length;
  }

  // TODO: MOVE STYLES TO styles.js
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", marginTop: "2%" }}>
        <ScrollView>
          <Heading style={{ alignSelf: "center" }}>
            {"Trip count: " + tripCount}
          </Heading>
          <Image
            source={{ uri: profileStore.profile.image }}
            style={{
              borderRadius: 50,
              padding: 1,
              height: 100,
              width: 100,
              alignSelf: "center",
            }}
            alt={"ProfilePicture"}
          />
          <Heading>{profileStore.profile.bio}</Heading>
        </ScrollView>
        <FAB
          style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
          medium
          icon="plus"
          onPress={() => navigation.navigate("ProfileEdit")}
        />
      </View>
    </>
  );
};

export default observer(Profile);
