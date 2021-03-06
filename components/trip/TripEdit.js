/* Imports */
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

/* State and Store */
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react-lite";

/*Styles*/
import {
  TripEditWrapper,
  TitleTextstyled,
  DescriptionTextstyled,
  SubmitButton,
  AddImageButton,
  TextStyled,
} from "./styles";

const TripEdit = ({ navigation, route }) => {
  // TODO: Style this component
  const oldTrip = route.params.trip;

  const [trip, setTrip] = useState({
    id: oldTrip.id,
    title: oldTrip.title,
    description: oldTrip.description,
    image: oldTrip.image,
  });

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
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
      setTrip({
        ...trip,
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
      <TripEditWrapper>
        <TitleTextstyled>Title</TitleTextstyled>
        <TextInput
          defaultValue={oldTrip.title}
          label="title"
          autoCapitalize="sentences"
          onChangeText={(title) => setTrip({ ...trip, title })}
          placeholder="Where did you go?"
        />
        <DescriptionTextstyled>Description</DescriptionTextstyled>
        <TextInput
          defaultValue={oldTrip.description}
          label="description"
          autoCapitalize="sentences"
          onChangeText={(description) => setTrip({ ...trip, description })}
          placeholder="Describe it!"
        />
        <AddImageButton onPress={pickImage}>
          <TextStyled>Add Image</TextStyled>
        </AddImageButton>
        <SubmitButton onPress={handleSubmit}>
          <TextStyled>Submit</TextStyled>
        </SubmitButton>
      </TripEditWrapper>
    </>
  );
};

export default observer(TripEdit);
