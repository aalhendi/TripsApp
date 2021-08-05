/* Imports */
import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

/* Styles */
import {
  Container,
  AddTripTitle,
  AddTextInput,
  AddButton,
  AddTripButtonText,
  AddImageButton,
} from "./styles";

/* State and Store */
import tripStore from "../../stores/tripStore";

const AddTrip = ({ navigation }) => {
  const [newTrip, setNewTrip] = useState({
    title: "",
    description: "",
    image: null,
  });

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
      setNewTrip({
        ...newTrip,
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

  const handleSubmit = async () => {
    await tripStore.createTrip(newTrip);
    navigation.goBack();
  };

  return (
    <>
      <Container>
        <AddTripTitle> Add Trip </AddTripTitle>
        <AddTextInput
          label="title"
          autoCapitalize="none"
          placeholder="title"
          onChangeText={(title) => setNewTrip({ ...newTrip, title })}
        />
        <AddTextInput
          label="description"
          autoCapitalize="none"
          placeholder="description"
          onChangeText={(description) =>
            setNewTrip({ ...newTrip, description })
          }
        />

        <AddImageButton onPress={pickImage}>
          <AddTripButtonText>Add Image</AddTripButtonText>
        </AddImageButton>
        <AddButton onPress={handleSubmit}>
          <AddTripButtonText>Submit</AddTripButtonText>
        </AddButton>
      </Container>
    </>
  );
};

export default AddTrip;
