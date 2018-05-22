import React from 'react';
import {
  ScrollView,
  Switch,
  View
} from 'react-native';
import {Header} from 'react-native-elements'
import MapCards from '../components/MapCards';
import MapGoogle from '../components/MapGoogle';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'MAP',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: '#ff8c00',
  };

  render() {
    return (
    <View>
      <Header
              innerContainerStyles={{backgroundColor: 'black'}}
              outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50}}
              centerComponent={{ text: 'MAP', style: { color: '#ff8c00', fontSize: 20} }}
              rightComponent={<Switch onTintColor='#ff8c00' />}
            />

      <ScrollView>
        <MapCards/>
        <MapGoogle/>
      </ScrollView>
    </View>

    );
  }
}
