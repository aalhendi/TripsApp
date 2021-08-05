/* Imports */
import React from "react";
import { Heading, List, Spinner } from "native-base";
/* Components */
import TripItem from "./TripItem";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";

const TripList = ({ navigation, inProfile }) => {
  //TODO: Finish styling and move styles to ./styles.js
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
    </>
  );
};

export default observer(TripList);
