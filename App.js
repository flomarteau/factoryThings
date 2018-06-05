import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import RootNavigation from './navigation/RootNavigation';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import AlertScreen from './screens/AlertScreen';

export default class App extends React.Component {

  render() {

    const RootStack = createStackNavigator({
      Home: HomeScreen,
      Map: MapScreen,
      Alert: AlertScreen
    });

    const AppNavigator = createSwitchNavigator({
      Nav: RootStack,
      Home: HomeScreen,
    });

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <RootNavigation />
        {/* <AppNavigator /> */}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
