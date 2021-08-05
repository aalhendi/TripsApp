/* Imports */
import React from "react";
import { FAB } from "react-native-paper";

/* State and Store */
import authStore from "../../../stores/authStore";

const EditBtn = ({ navigation, trip }) => {
  return (
    <>
      {authStore.user?.id === trip.userId && (
        <FAB
          onPress={() => navigation.navigate("TripEdit", { trip: trip })}
          style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
          medium
          icon="update"
        />
      )}
    </>
  );
};

export default EditBtn;
