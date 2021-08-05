/* Imports */
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

/* State and Store */
import profileStore from "../../stores/profileStore";

/*Styles*/
import {
  ProfileEditedWrapper,
  BioTextStyled,
  ImageButtonStyled,
  SubmitButtonStyled,
  TextStyled,
} from "./styles";

const ProfileEdit = ({ navigation, route }) => {
  const oldProfile = route.params.profile;

  const [profile, setProfile] = useState({
    bio: oldProfile.bio,
    image: oldProfile.image,
    userId: oldProfile.userId,
    username: oldProfile.username,
  });

  const handleSubmit = async () => {
    // TODO: Fix live rendering of updated profile
    await profileStore.updateProfile(profile);
    navigation.goBack();
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
      <ProfileEditedWrapper>
        <BioTextStyled>Bio</BioTextStyled>
        <TextInput
          label="bio"
          value={profile.bio}
          autoCapitalize="sentences"
          onChangeText={(bio) => setProfile({ ...profile, bio })}
          placeholder="Tell us something about yourself."
        />
        <ImageButtonStyled onPress={pickImage}>
          <TextStyled>Select Image</TextStyled>
        </ImageButtonStyled>
        <SubmitButtonStyled onPress={handleSubmit}>
          <TextStyled>Submit</TextStyled>
        </SubmitButtonStyled>
      </ProfileEditedWrapper>
    </>
  );
};

export default ProfileEdit;
