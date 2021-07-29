/* Imports */
import React from "react";
/* State and Store */
import authStore from "../stores/authStore";
import { observer } from "mobx-react-lite";

// Styling

// import { ImageBackground } from "react-native";
import {
  HomeBackground,
  Title,
  TopStyling,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

// import { View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "20%" }}
      source={{
        uri:
          // add url
          "https://labelllevie.files.wordpress.com/2014/07/travel.jpg?w=1090&h=726",
      }}
    >
      <OverLayContainer>
        <TopStyling
          style={{
            height: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title>Trips around the world</Title>
        </TopStyling>
        <BottomStyling>
          {/* add where to go */}
          
          <ButtonStyled onPress={() => navigation.navigate("Register")}>
            Register
          </ButtonStyled>

          <ButtonStyled
            onPress={
              authStore.user ? authStore.logout : () => alert("Not logged in!")
            }
          >
            Logout
          </ButtonStyled>

          <ButtonStyled onPress={() => navigation.navigate("Login")}>
            Log in
          </ButtonStyled>

        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);
