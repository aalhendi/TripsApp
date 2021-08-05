/* Imports */
import React from "react";
import { View, Spinner } from "native-base";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { Text, FAB } from "react-native-paper";
import EditBtn from "./Buttons/EditBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

/* Styles */
import { DetailTitle, DetailImage, DetailWrapper } from "./styles";

/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;

  if (tripStore.loading || authStore.loading) {
    return <Spinner />;
  }

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", marginTop: "2%" }}>
        <ScrollView>
          <DetailWrapper>
            <DetailImage
              source={{ uri: trip.image }}
              style={{
                borderRadius: 50,
                padding: 1,
                height: 150,
                width: 150,
                alignSelf: "center",
              }}
              alt={"TripPicture"}
            />
            <DetailTitle>{trip.title}</DetailTitle>
            <Text style={{ fontSize: 18 }}>{trip.description}</Text>
            <DeleteBtn trip={trip} navigation={navigation} />
          </DetailWrapper>
        </ScrollView>
      </View>
      <EditBtn trip={trip} navigation={navigation} />
    </>
  );
};

export default observer(TripDetail);
