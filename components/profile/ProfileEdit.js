/* Imports */
import React, { useState, useEffect } from "react";
import { Button } from "native-base";
import { TextInput, Text } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { View, Platform } from "react-native";

/* State and Store */
import profileStore from "../../stores/profileStore";

const ProfileEdit = ({ navigation }) => {
  const [profile, setProfile] = useState({
    bio: profileStore.profile.bio,
    image: profileStore.profile.image,
  });

  const handleSubmit = () => {
    profileStore.updateProfile(profile);
    navigation.replace("Profile");
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let filename = result.uri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let img_type = match ? `image/${match[1]}` : `image`;
      setProfile({
        ...profile,
        image: {
          uri:
            Platform.OS === "android"
              ? result.uri
              : result.uri.replace("file://", ""),
          name: filename,
          type: img_type,
        },
      });
    }
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
          value={profile.bio}
          autoCapitalize="sentences"
          onChangeText={(bio) => setProfile({ ...profile, bio })}
          placeholder="Tell us something about yourself."
        />
        <Button onPress={pickImage}>Select Image</Button>
        <Button onPress={handleSubmit}>Submit</Button>
      </View>
    </>
  );
};

export default ProfileEdit;
