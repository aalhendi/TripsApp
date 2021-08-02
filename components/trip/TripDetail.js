import React from "react";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

//styles
import { DetailTitle, DetailImage, DetailWrapper } from "./styles";

//native-base
import { Spinner } from "native-base";
import { Text } from "react-native-paper";

// please if you are not using navigation remove it
const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading) {
    return <Spinner />;
  }

  return (
    <>
      <DetailWrapper>
        <DetailImage source={{ uri: trip.image }} />
        <DetailTitle>{trip.title}</DetailTitle>
        <Text>{trip.description}</Text>
      </DetailWrapper>
    </>
  );
};

export default observer(TripDetail);
