import React from "react";

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
          <ButtonStyled onPress={() => navigation.navigate("")}>
            Click here
          </ButtonStyled>
          <ButtonStyled onPress={() => navigation.navigate("Register")}>
            Register
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
