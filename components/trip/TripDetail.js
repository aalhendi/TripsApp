import React from "react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

//observer
import { observer } from "mobx-react";

//styles
import { DetailTitle, DetailImage, DetailWrapper } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

//native-base
import { View, Spinner } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, FAB } from "react-native-paper";

// please if you are not using navigation remove it
const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading || authStore.loading) {
    return <Spinner />;
  }

  const handleDelete = () => {
    // TODO: Delete confirmation alert
    tripStore.deleteTrip(trip.id);
    navigation.replace("TripList");
  };

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
                height: 100,
                width: 100,
                alignSelf: "center",
              }}
              alt={"TripPicture"}
            />
            <DetailTitle>{trip.title}</DetailTitle>
            <Text>{trip.description}</Text>
            <TouchableOpacity onPress={handleDelete}>
              {authStore.user?.id === trip.userId ? (
                <FontAwesome5 name="trash" size={29} color="red" />
              ) : (
                <></>
              )}
            </TouchableOpacity>
          </DetailWrapper>
        </ScrollView>
      </View>
      {authStore.user?.id === trip.userId ? (
        <FAB
          onPress={() => navigation.navigate("TripEdit", { trip: trip })}
          style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
          medium
          icon="update"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(TripDetail);
