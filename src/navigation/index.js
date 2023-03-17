import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import DemoScreen from '../demo screen';
import HomeScreen from '../home-screen';
import Example1 from '../practice screen/example-1';
import Example2 from '../practice screen/example-2';
import Example3 from '../practice screen/example-3';


const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
        <Stack.Screen name="Example1" component={Example1} />
        <Stack.Screen name="Example2" component={Example2} />
        <Stack.Screen name="Example3" component={Example3} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
