import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CircleScreen from '../screens/Circle';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="circle"
        component={CircleScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
