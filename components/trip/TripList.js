/* Imports */
import React from "react";
import { Text, View } from "react-native";
import { Heading, List, ScrollView, Spinner } from "native-base";
/* Components */
import TripItem from "./TripItem";
import AddBtn from "./AddButton/AddBtn";
/* State and Store */
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";
/*styles*/
import {
  ListWrapper,
  Textstyled,
  Liststyled,
  ScrollViewStyled,
} from "./styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading || profileStore.loading) return <Spinner />;

  const tripList = tripStore.trips?.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <>
      <ScrollViewStyled>
        <ListWrapper>
          <Textstyled>Trip List</Textstyled>
          <Liststyled>{tripList}</Liststyled>
        </ListWrapper>
      </ScrollViewStyled>
      {/*TODO: Render add button only if user is logged in. */}
      <AddBtn navigation={navigation} />
    </>
  );
};

export default observer(TripList);
