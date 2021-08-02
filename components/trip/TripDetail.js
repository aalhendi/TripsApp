import React from "react";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

//styles
import { DetailTitle, DetailImage, DetailWrapper } from "./styles";

//native-base
import { Spinner , Button} from "native-base";
import { Text } from "react-native-paper";

//state
import { useState } from "react";

const TripDetail = ({ route }) => {
  const [state, setState] = useState({
    title:"",
    description:"",
    image:"",
});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  
  };
 
  const { trip } = route.params;
  if (tripStore.loading) {
    return <Spinner />;
  }

  return (
    <>
      <DetailWrapper>
        <DetailImage source={{ uri: trip.image }} />
        <DetailTitle 
        onChange={setState}
        >{trip.title}</DetailTitle>
        <Text>{trip.description}</Text>
        <Button onPress={handleChange}>
        <Text>Update</Text>
        </Button>
      </DetailWrapper>
    </>
  );
};

export default observer(TripDetail);