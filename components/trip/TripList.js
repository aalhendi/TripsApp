import React from "react";
//observer
import { observer } from "mobx-react";
//components
import { Text, View } from "react-native";
import { Heading, List, Spinner } from "native-base";
import TripItem from "./TripItem";
import { ScrollView } from "react-native";
//stores
import tripStore from "../../stores/tripStore";

const TripList = ({ navigation }) => {
  
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips?.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Heading style={{ margin: "10%" }}>Trip List</Heading>
      
      <List style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <ScrollView>{tripList}</ScrollView> 
      </List>
    </View>
  );
};

export default observer(TripList);
