import React from "react";
//observer
import { observer } from "mobx-react";
//components
import { Text, Veiw } from "react-native";
import TripItem from "./TripItem";
//stores
import tripStore from "../../stores/tripStore";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trips) => {
    <TripItem trips={trips} key={trips.id} navigation={navigation} />;
  });
  return <Veiw>{tripList}</Veiw>;
};

export default observer(TripList);
