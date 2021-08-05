/* Imports */
import React from "react";
import { List, Spinner } from "native-base";
/* Components */
import TripItem from "./TripItem";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";

const TripList = ({ navigation, inProfile, trips }) => {
  //TODO: Finish styling and move styles to ./styles.js
  if (tripStore.loading || profileStore.loading) return <Spinner />;

  let tripList = inProfile
    ? tripStore.trips.filter((trip) => trip.userId === authStore.user?.id)
    : tripStore.trips.filter((trip) => trip.userId !== authStore.user?.id);

  if (trips) {
    tripList = trips;
  }

  tripList = tripList.map((trip) => (
    <TripItem
      trip={trip}
      key={trip.id}
      navigation={navigation}
      inProfile={inProfile}
    />
  ));

  return <List style={{ border: "none" }}>{tripList}</List>;
};

export default observer(TripList);
