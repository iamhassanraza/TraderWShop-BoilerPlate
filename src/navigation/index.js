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
import AllCategories from '../screens/AllCategories';
import AllProducts from '../screens/AllProducts';
import Success from '../screens/Success';

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
        <Stack.Screen name="AllCategories" component={AllCategories} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
