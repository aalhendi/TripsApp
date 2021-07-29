import React from "react";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";
import TripList from "./TripList";

//styles
import {
    DetailTitle,
    DetailImage,
    DetailWrapper,
  } from "./styles";

  //native-base
import { Spinner } from "native-base";


const TripDetail = ({ navigation, route }) => {
    const { trip } = route.params;
    if (bakeryStore.loading) return <Spinner />;

    const mytrips = trip.mytrips.map((mytrip)=> tripStore.getTripById(mytrip.id));

    return (
        <>
      <DetailWrapper>
        <DetailImage source={{ uri: btrip.image  }} />
        <DetailTitle>{trip.title}</DetailTitle>
      </DetailWrapper>
      <TripList mytrips={mytrips} />
    </>
    )
}

export default observer(TripDetail);
