import React from 'react';
import {
  View,
  Button
} from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'DASHBOARD',
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: '#ff8c00',
  };

  render() {
    return (
      <View>
        <Header
                innerContainerStyles={{backgroundColor: 'black'}}
                outerContainerStyles={{backgroundColor: 'black', marginTop: 20, height: 50}}
                centerComponent={{ text: 'DASHBOARD', style: { color: '#ff8c00', fontSize: 20 } }}
              />
        <Button
          title="Go to map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  };

}
