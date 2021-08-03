/* Imports */
import React, { useState, useEffect } from "react";
import { Button } from "native-base";
import { TextInput, Text } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { View, Platform } from "react-native";

/* State and Store */
import tripStore from "../../stores/tripStore";

//TODO: keep defualt pic if not updated
const TripEdit = ({ route }) => {
    const oldTrip = route.params.trip;

    const [trip, setTrip] = useState({
        
        id:oldTrip.id,
        title: oldTrip.title,
        description: oldTrip.description,
        image: oldTrip.image,
    });
    const handleSubmit = () => {
        tripStore.updateTrip(trip);
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
          <View style={{ flex: 1, margin: "2%" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Title
            </Text>
            <TextInput
            defaultValue={oldTrip.title}
              label="title"
              autoCapitalize="sentences"
              onChangeText={(title) => setTrip({ ...trip, title })}
              placeholder="Where did you go?"
            />
             <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Description
            </Text>
            <TextInput
            defaultValue={oldTrip.description}
              label="description"
              autoCapitalize="sentences"
              onChangeText={(description) => setTrip({ ...trip, description })}
              placeholder="Tell me more!!"
            />
            <Button onPress={pickImage}>Select Image</Button>
            <Button onPress={handleSubmit}>Submit</Button>
          </View>
        </>
      );
    };
    
export default TripEdit
