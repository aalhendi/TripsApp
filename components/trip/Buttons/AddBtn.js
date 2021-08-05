import React from "react";
import { FAB } from "react-native-paper";
import { observer } from "mobx-react-lite";
import authStore from "../../../stores/authStore";

const AddBtn = ({ navigation }) => {
  if (authStore.user?.id) {
    return (
      <FAB
        style={{ margin: 16, position: "absolute", right: 0, bottom: 0 }}
        small
        icon="plus"
        onPress={() => navigation.navigate("AddTrip")}
      />
    );
  }
};

export default observer(AddBtn);
