/* Imports */
import React from "react";
import { ScrollView, View } from "native-base";

/* Components */
import TripList from "./TripList";
import AddBtn from "./Buttons/AddBtn";

const TripExplore = ({ navigation }) => {
  // TODO: Move styles to ../styles.js
  return (
    <>
      <ScrollView style={{ marginVertical: "2%" }}>
        <TripList inProfile={false} navigation={navigation} />
      </ScrollView>
      <AddBtn navigation={navigation} />
    </>
  );
};

export default TripExplore;
