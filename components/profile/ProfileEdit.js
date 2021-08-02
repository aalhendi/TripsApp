/* Imports */
import React, { useState } from "react";
import { View } from "native-base";
import { TextInput, Text } from "react-native-paper";
/* State and Store */
import profileStore from "../../stores/profileStore";

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    bio: "",
    image: "",
  });

  const handleSubmit = () => {
    profileStore.updateProfile(profile);
  };

  return (
    <>
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          Bio
        </Text>
        <TextInput
          label="bio"
          autoCapitalize="sentences"
          onChangeText={(bio) => setProfile({ ...profile, bio })}
          placeholder="Tell us something about yourself."
        />
      </View>
    </>
  );
};

export default ProfileEdit;
