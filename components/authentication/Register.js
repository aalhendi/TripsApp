/* Imports */
import React from "react";

/* Styles */
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
} from "./styles";

/* State and Store */
import authStore from "../../stores/authStore";
import { observer } from "mobx-react-lite";

const Register = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    const registerStatus = await authStore.register(userInfo);
    if (registerStatus) {
      navigation.replace("TripExplore");
    } else {
      alert("Register failed");
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthTitle> Register</AuthTitle>
        <AuthTextInput
          label="username"
          autoCapitalize="none"
          placeholder="username"
          onChangeText={(username) => setUserInfo({ ...userInfo, username })}
        />
        <AuthTextInput
          label="password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(password) => setUserInfo({ ...userInfo, password })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Register</AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};
export default observer(Register);
