import React from "react";
//components
import { Text, Veiw } from "react-native";
import { Image } from "react-native";
import { List } from "native-base";
//stores
// import tripStore from "../../stores/tripStore";

const TripItem = ({ trips, navigation }) => {
  return (
    <List.Item>
      <Image source={{ uri: trips.image }} />
    </List.Item>
  );
};

export default TripItem;
