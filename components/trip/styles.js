import styled from "styled-components/native";

export const ShopItemStyled = styled.Text`
  color: black;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

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

export const AddButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 3%;
  border-radius: 40px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;

export const AddTripButtonText = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 5px;
  border-bottom-color: ${(props) => props.theme.green};
`;

export const AddImageButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 3%;
  border-radius: 40px;
  background-color: ${(props) => props.theme.green};
  margin-top: 30px;
`;
