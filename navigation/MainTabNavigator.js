import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import AlertScreen from '../screens/AlertScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarOptions: { showLabel: false, style: { backgroundColor: 'black' } },
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarOptions: { showLabel: false, style: { backgroundColor: 'black' } },
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map'}
    />
  ),
};

const AlertStack = createStackNavigator({
  Alert: AlertScreen,
});

AlertStack.navigationOptions = {
  tabBarOptions: { showLabel: false, style: { backgroundColor: 'black' } },
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-warning${focused ? '' : '-outline'}` : 'md-warning'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  AlertStack,
});
