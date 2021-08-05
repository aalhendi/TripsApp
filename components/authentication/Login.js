/* Imports */
import React, { useState } from "react";

/* Styles */
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "./styles";

/* State and Store */
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    const loginStatus = await authStore.login(user);
    if (loginStatus) {
      navigation.replace("TripExplore");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthTitle>Log in</AuthTitle>
        <AuthTextInput
          placeholder="username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <AuthTextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Log in</AuthButtonText>
        </AuthButton>

        <AuthOther onPress={() => navigation.navigate("Register")}>
          Tap here to Register
        </AuthOther>
      </AuthContainer>
    </>
  );
};
export default observer(Login);
