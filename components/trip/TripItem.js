/* Imports */
import React from "react";

/* Styles */
import {
  TripTitleStyled,
  ItemWrapper,
  ItemTouchableOpacity,
  TripImage,
  ProfileButton,
  ProfileNameText,
  ProfileImage,
} from "./styles";

/* State and Store */
import profileStore from "../../stores/profileStore";

const TripItem = ({ trip, navigation, inProfile }) => {
  const ownerProfile = profileStore.profiles.find(
    (profile) => profile.id === trip.userId
  );

  return (
    <ItemWrapper>
      <ItemTouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        style={{ flex: 1 }}
      >
        <TripImage source={{ uri: trip.image }} />
        <TripTitleStyled>{trip.title}</TripTitleStyled>
        {!inProfile && (
          <>
            <ProfileButton
              onPress={() =>
                navigation.navigate("Profile", {
                  profile: ownerProfile,
                })
              }
            >
              <ProfileNameText>{ownerProfile.username}</ProfileNameText>
              <ProfileImage source={{ uri: ownerProfile.image }} />
            </ProfileButton>
          </>
        )}
      </ItemTouchableOpacity>
    </ItemWrapper>
  );
};

export default TripItem;
