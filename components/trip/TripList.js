/* Imports */
import React from "react";
import { Text, View } from "react-native";
import { Heading, List, ScrollView, Spinner } from "native-base";
/* Components */
import TripItem from "./TripItem";
import AddBtn from "./AddButton/AddBtn";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";

const TripList = ({ navigation, inProfile }) => {
  if (tripStore.loading || profileStore.loading) return <Spinner />;

  let tripList = inProfile
    ? tripStore.trips.filter((trip) => trip.userId === authStore.user?.id)
    : tripStore.trips.filter((trip) => trip.userId !== authStore.user?.id);

  tripList = tripList.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <>
      <Heading style={{ margin: "1%" }}>Trip List</Heading>
      <List style={{ width: "100%", height: "100%", alignItems: "center" }}>
        {tripList}
      </List>
      {/*TODO: Render add button only if user is logged in. */}
      {/* <AddBtn navigation={navigation} /> */}
    </>
  );
};

export default observer(TripList);
