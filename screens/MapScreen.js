import React from 'react';
import {
  View
} from 'react-native';
import MapCards from '../components/MapCards';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'MAP',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: '#ff8c00',
  };

  render() {
    return (
      <View>
        <MapCards/>
      </View>
    );
  }
}
