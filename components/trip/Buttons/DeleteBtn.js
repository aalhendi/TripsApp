/* Imports */
import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

/* State and Store */
import authStore from "../../../stores/authStore";
import tripStore from "../../../stores/tripStore";

const DeleteBtn = ({ navigation, trip }) => {
  const handleDelete = () => {
    Alert.alert(
      "Delete Trip",
      "Are you sure you wish to delete this trip?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
        },
        {
          text: "Delete",
          onPress: () =>
            tripStore.deleteTrip(trip.id).then(navigation.goBack()),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <TouchableOpacity onPress={handleDelete} style={{ margin: 10 }}>
        {authStore.user?.id === trip.userId && (
          <FontAwesome5 name="trash" size={28} color="red" />
        )}
      </TouchableOpacity>
    </>
  );
};

export default DeleteBtn;
