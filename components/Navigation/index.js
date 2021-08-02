/* Imports */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Home from "../Home";
import TripList from "../trip/TripList";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import TripDetail from "../trip/TripDetail";
import AddTrip from "../trip/AddTrip";
import Profile from "../profile/Profile";
import ProfileEdit from "../profile/ProfileEdit";

const Stack = createStackNavigator();
export default RootNavigator = ({ theme }) => {
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
        name="TripList"
        component={TripList}
        options={{
          headerShown: false,
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

      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
