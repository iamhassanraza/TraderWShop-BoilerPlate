import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '../utils/Navigator';

//Screens
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Checkout from '../screens/Checkout';
import Search from '../screens/Search';
import Favourites from '../screens/Favourites';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        Navigator.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
