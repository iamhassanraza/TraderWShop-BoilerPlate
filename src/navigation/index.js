import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '../utils/Navigator';

//Screens
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer ref={(navigatorRef) => {  Navigator.setTopLevelNavigator(navigatorRef) }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>

        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
