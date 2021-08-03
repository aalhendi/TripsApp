/* Imports */
import React from "react";
import { Text, View } from "react-native";
import { Heading, List, Spinner } from "native-base";
/* Components */
import TripItem from "./TripItem";
import AddBtn from "./AddButton/AddBtn";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips?.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Heading style={{ margin: "1%" }}>Trip List</Heading>
      <List style={{ width: "100%", height: "100%", alignItems: "center" }}>
        {tripList}
      </List>

      {/*TODO: Render add button only if user is logged in. */}
      <AddBtn navigation={navigation} />
    </View>
  );
};

export default observer(TripList);
