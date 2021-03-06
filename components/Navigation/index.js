/* Imports */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Home from "../Home";
import TripExplore from "../trip/TripExplore";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import TripDetail from "../trip/TripDetail";
import TripEdit from "../trip/TripEdit";
import AddTrip from "../trip/AddTrip";
import Profile from "../profile/Profile";
import ProfileEdit from "../profile/ProfileEdit";

/*State and Store */
import { observer } from "mobx-react-lite";

const Stack = createStackNavigator();
const RootNavigator = ({ theme }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.green,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TripExplore"
        component={TripExplore}
        options={{
          headerShown: true,
          title: "Explore",
        }}
      />

      <Stack.Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
          };
        }}
      />
      <Stack.Screen
        name="TripEdit"
        component={TripEdit}
        options={{
          headerShown: true,
          title: "Trip Edit",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="AddTrip" component={AddTrip} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.username,
          };
        }}
      />

      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.username,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigator);
