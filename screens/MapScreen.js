import React from 'react';
import {
  ScrollView,
  Switch,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import {Header} from 'react-native-elements';

import MapCards from '../components/MapCards';
import MapGoogle from '../components/MapGoogle';

import { Ionicons } from '@expo/vector-icons';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'MAP',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: '#ff8c00',
  };

  constructor() {
    super();
    this.showMap = this.showMap.bind(this);
    this.state = {
      mapView: "visible",
    }
    console.log(this.state);
  }

  showMap(visible) {
    this.setState({
      mapView: "visible",
    });
    console.log(this.state);
  }

  hideMap(hidden) {
    this.setState({
      mapView: "hidden",
    });
    console.log(this.state);
  }

  render() {

    var pictoList =
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Map')}
        onPress={() => this.hideMap()}
        padding={60}
      >
        <Ionicons name="ios-book" size={24} color="#ff8c00" />
      </TouchableOpacity>

    var pictoMap =
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Map')}
        onPress={() => this.showMap()}
        padding={60}
      >
        <Ionicons name="ios-globe" size={24} color="#ff8c00" />
      </TouchableOpacity>

    var backArrow =
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        padding={50}
      >
        <Ionicons name="ios-arrow-back" size={22} color="#ff8c00" />
      </TouchableOpacity>

    if(this.state.mapView == "visible") {
      return (
        <View>
          <Header
            innerContainerStyles={{backgroundColor: 'black'}}
            outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50}}
            centerComponent={{ text: 'MAP', style: { color: '#ff8c00', fontSize: 20} }}
            rightComponent={ pictoList }
            // leftComponent={ backArrow }
          />
          <View style={{height: '100%'}}>
            <MapGoogle/>
          </View>
        </View>
      );
    } else if(this.state.mapView == "hidden"){
      return (
        <View>
          <Header
            innerContainerStyles={{backgroundColor: 'black'}}
            outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50}}
            centerComponent={{ text: 'LIST', style: { color: '#ff8c00', fontSize: 20} }}
            rightComponent={ pictoMap }
            // leftComponent={ backArrow }
          />
          <ScrollView>
            <MapCards/>
          </ScrollView>
        </View>
      );
    }

  }
}
