import React from "react";
//observer
import { observer } from "mobx-react";
//components
import { Text, View } from "react-native";
import TripItem from "./TripItem";
//stores
import tripStore from "../../stores/tripStore";
import { Heading, List, Spinner } from "native-base";
import { Title } from "./styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips?.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  console.log(tripList);
  return <List>{tripList}</List>;
};

export default observer(TripList);
