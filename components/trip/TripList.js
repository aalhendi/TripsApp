import React from "react";
//observer
import { observer } from "mobx-react";
//components
import { Text, View } from "react-native";
import TripItem from "./TripItem";
//stores
import tripStore from "../../stores/tripStore";
import { Heading } from "native-base";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trips) => {
    <TripItem trips={trips} key={trips.id} navigation={navigation} />;
  });
  return (
    <>
      <View style={{ flex: 1, alignSelf: "center" }}>
        <Heading>Trip List</Heading>
      </View>
      <View>{tripList}</View>
    </>
  );
};

export default observer(TripList);
