import React from "react";
//observer
import { observer } from "mobx-react";
//components
import { Text, View } from "react-native";
import { Heading, List, Spinner } from "native-base";
import TripItem from "./TripItem";
//stores
import tripStore from "../../stores/tripStore";
import { Title } from "./styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips?.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  console.log(tripList);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Heading style={{ margin: "1%" }}>Trip List</Heading>
      <List style={{ width: "100%", height: "100%", alignItems: "center" }}>
        {tripList}
      </List>
    </View>
  );
};

export default observer(TripList);
