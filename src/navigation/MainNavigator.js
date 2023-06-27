import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from '../helper/rootNavigation';
import Home from '../screens/Home/Home';
import PublicAPI from '../screens/PublicAPI/PublicAPI';
import Redux from '../screens/Redux/Redux';
import GreatDesign from '../screens/GreatDesign/GreatDesign';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'PublicApi'} component={PublicAPI} />
        <Stack.Screen name={'Redux'} component={Redux} />
        <Stack.Screen name={'GreatDesign'} component={GreatDesign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
