import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MaterialComunnityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './Home';

const HomeName = 'Home';



const Tab = createBottomTabNavigator();

export default function MainContainer(){
  return(
      <Tab.Navigator initialRouteName={HomeName} screenOptions={{ headerShown: false }} >
        

        <Tab.Screen 
          name={HomeName} 
          component={HomeScreen} 
          options={{tabBarIcon: ({color, size}) => 
          <MaterialCommunityIcons name="home" color={color} size={size}/> }} 
        />

        
      </Tab.Navigator>
  );
}