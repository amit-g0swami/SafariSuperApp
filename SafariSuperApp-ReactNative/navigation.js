import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../safari/screens/HomeScreen";
import NewPostScreen from "../safari/screens/NewPostScreen";
import LoginScreen from "../safari/screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import UberEatsScreen from "./screens/UberEatsScreen";
import MusicScreen from "../safari/screens/MusicScreen";
import ReelsScreen from "../safari/screens/ReelsScreen";
import Notification from "../safari/screens/Notification";
import ShoppingScreen from "./screens/ShoppingScreen";
import DashBoardScreen from "./screens/DashBoardScreen";
import ChatScreen from "./screens/ChatScreen";
import InfoScreen from "./screens/InfoScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={Notification} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="UberEatsScreen" component={UberEatsScreen} />
      <Stack.Screen name="MusicScreen" component={MusicScreen} />
      <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

