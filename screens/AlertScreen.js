import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import {
  Header
} from 'react-native-elements';
import AlertCards from '../components/AlertCards';

export default class AlertScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'ALERTS',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: '#ff8c00',
  };

  render() {
    return(
      <View>
        <Header
          innerContainerStyles={{backgroundColor: 'black'}}
          outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50}}
          centerComponent={{ text: 'ALERTS', style: { color: '#ff8c00', fontSize: 20 } }}
        />
        <ScrollView>
          <AlertCards/>
        </ScrollView>
      </View>
    );
  };

}
