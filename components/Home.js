import React from "react";

// Styling

// import { ImageBackground } from "react-native";
import { HomeBackground, Title ,TopStyling, OverLayContainer,BottomStyling, ButtonStyled } from "../styles";

// import { View, Text } from "react-native";


const Home = ({ navigation }) => {
  return <HomeBackground style={{ flex: 1, width: "100%", height: "20%" }}
  source={{
    uri:
    // add url
      "",
  }}>
  <OverLayContainer>
    <TopStyling
    style={{ height: "40%", alignItems: "center", justifyContent: "center" }}
  > 
  <Title style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
      Sinful
    </Title></TopStyling>
    <BottomStyling>
    {/* add where to go */}
   <ButtonStyled onPress={() =>  navigation.navigate("")}>Click here 
   </ButtonStyled>
 </BottomStyling> 
    </OverLayContainer> 
  </HomeBackground>
};

export default Home;