import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Header
} from 'react-native-elements';
import AlertCards from '../components/AlertCards';

import { Ionicons } from '@expo/vector-icons';

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
          outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50, marginBottom: 10}}
          centerComponent={{ text: 'ALERTS', style: { color: '#ff8c00', fontSize: 20 } }}
          // leftComponent={
          //   <TouchableOpacity
          //     onPress={() => this.props.navigation.goBack()}
          //     padding={50}
          //   >
          //     <Ionicons name="ios-arrow-back" size={22} color="#ff8c00" />
          //   </TouchableOpacity>
          // }
        />

        <ScrollView>
          <AlertCards/>
        </ScrollView>
      </View>
    );
  };

}
