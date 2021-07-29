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
    await authStore.register(userInfo);
    // TODO: FIX NAVIGATION REPLACE
    if (authStore.user) {
      navigation.replace("Home");
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
