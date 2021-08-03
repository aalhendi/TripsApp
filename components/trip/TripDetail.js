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
import { View, Heading, Spinner, Image, } from "native-base";
import { ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import { Text, FAB } from "react-native-paper";





const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading) {
    return <Spinner />;
  }

  return (
    <>
     <View style={{ flex: 1, alignItems: "center", marginTop: "2%" }}>
        <ScrollView>
        <DetailWrapper>
        <DetailImage source={{ uri: trip.image }} 
          style={{
              borderRadius: 50,
              padding: 1,
              height: 100,
              width: 100,
              alignSelf: "center",
            }}
            alt={"TripPicture"}
        />
        <DetailTitle >{trip.title}</DetailTitle>
        <Text>{trip.description}</Text>
      </DetailWrapper>  
        </ScrollView> 
        <TouchableOpacity>
      {/* it's better to move it inside the detail page */}
        {authStore.user?.id === trip.userId ? (
          <FontAwesome5
            name="trash"
            size={29}
            color="black"
            onPress={() => tripStore.deleteTrip(trip.id)}
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
        {/* navigate update button to new screen (trip edit) */}
        
        <TouchableOpacity>
        {authStore.user?.id === trip.userId ? (
        <FAB
          style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
          medium
          icon="update"
          onPress={() => navigation.navigate("TripEdit",{ trip : trip})}
        />
        ) : (
          <></>
        )}
        </TouchableOpacity>
        </View>
      
    </>

    
  );
};

export default observer(TripDetail);