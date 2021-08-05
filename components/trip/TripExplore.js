/* Imports */
import React from "react";
import { ScrollView, View } from "native-base";
/* Components */
import TripList from "./TripList";
import AddBtn from "./AddButton/AddBtn";

const TripExplore = ({ navigation }) => {
  return (
    <>
      <ScrollView style={{ marginVertical: "2%" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TripList inProfile={false} navigation={navigation} />
        </View>
      </ScrollView>
      <AddBtn navigation={navigation} />
    </>
  );
};

export default TripExplore;
