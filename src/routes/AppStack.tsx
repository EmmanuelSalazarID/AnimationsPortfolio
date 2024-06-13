import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeController from 'screens/Home/HomeController';
import { AppStackParams } from 'utils';
import YoutubeTransitionController from 'screens/YoutubeTransition/YoutubeTransitionController';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeController} />
    <Stack.Screen name="YoutubeTransition" component={YoutubeTransitionController} />
  </Stack.Navigator>
);

export default AppStack;
