import styled from "styled-components/native";
import { FAB } from "react-native-paper";

export const ProfileWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 2%;
  width: 100%;
`;

export const CountStyled = styled.Text`
  align-self: center;
  font-size: 27px;
  font-weight: bold;
  color: ${(props) => props.theme.green};
`;

export const ProfileImageStyled = styled.Image`
  border-radius: 50px;
  padding: 1px;
  width: 100px;
  height: 100px;
  align-self: center;
`;

export const BioStyled = styled.Text`
  align-self: center;
  font-size: 27px;
  font-weight: bold;
  color: ${(props) => props.theme.green};
`;

export const ProfileAdd = styled(FAB)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 15px;
`;

export const ProfileEditedWrapper = styled.View`
  flex: 1;
  margin-top: 2%;
`;

export const BioTextStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  align-self: center;
  color: ${(props) => props.theme.green};
`;

export const ImageButtonStyled = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  width: 50%;
  padding: 3%;
  border-radius: 2px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;

export const SubmitButtonStyled = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  width: 50%;
  padding: 3%;
  border-radius: 2px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;

export const TextStyled = styled.Text`
  align-self: center;
  color: white;
`;
