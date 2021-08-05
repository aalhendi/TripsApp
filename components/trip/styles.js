import styled from "styled-components/native";
import { FAB } from "react-native-paper";
import { List, ScrollView } from "native-base";

export const TripTitleStyled = styled.Text`
  color: black;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ListWrapper = styled.View`
  margin-top: 10%;
  align-items: center;
`;

export const ItemWrapper = styled.View`
  margin: 1%;
`;

export const TripEditWrapper = styled.View`
  margin: 2%;
  flex: 1;
`;

export const Textstyled = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 1%;
  align-self: center;
  color: ${(props) => props.theme.green};
`;

export const Liststyled = styled(List)`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ScrollViewStyled = styled(ScrollView)``;

export const ItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const DetailWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const DetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;

export const Container = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const AddTripTitle = styled.Text`
  color: ${(props) => props.theme.green};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.green};
`;

export const AddTextInput = styled.TextInput`
  align-self: center;
  width: 300px;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  border-bottom-color: ${(props) => props.theme.mainColor};
  border-bottom-width: 1px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 3%;
  border-radius: 2px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;

export const ItemTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;

export const ProfileButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;

export const AddTripButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
  border-bottom-color: ${(props) => props.theme.green};
`;

export const ProfileNameText = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.green};
`;

export const AddImageButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 3%;
  border-radius: 2px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;

export const AddTrip = styled(FAB)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 15px;
`;

export const TripImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const DeleteOpacityStyled = styled.TouchableOpacity`
  flex: 1;
`;

export const TitleTextstyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 10px;
  color: ${(props) => props.theme.green};
`;

export const DescriptionTextstyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 10px;
  color: ${(props) => props.theme.green};
`;

export const TextStyled = styled.Text`
  align-self: center;
  color: white;
`;
