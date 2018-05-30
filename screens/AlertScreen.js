import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Header} from 'react-native-elements'
import Card from 'antd-mobile/lib/card';

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

          <Card full style={{backgroundColor: '#333333', marginBottom: 10}}>
            <Card.Header title={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Colixbox n°XXX</Text>} extra={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Caisson n°XXX</Text>}/>
              <Card.Body>
                <View style={{height: 50, borderBottomColor: '#6b6b6b', borderBottomWidth: 1}}>
                  <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 10}}>Le caisson est ouvert</Text>
                </View>
              </Card.Body>
            <Card.Footer content={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>10 rue du Pont, 75001 Paris</Text>} extra={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Type : Copropriété</Text>}/>
          </Card>

        </ScrollView>
      </View>
    );
  };

}
