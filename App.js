import React, {useState} from 'react';
import SearchResults from './SearchResults';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Camera from './Camera';
import HomeScreen from './HomeScreen';
import create from 'zustand';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
          }}
        />
        <Stack.Screen
          name='Camera'
          component={Camera}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
          }}
        />
        <Stack.Screen
          name='Search'
          component={SearchResults}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
