import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Card from 'antd-mobile/lib/card';
import Button from 'antd-mobile/lib/button';

import BoxDetailScreen from '../screens/BoxDetailScreen';

export default class MapCards extends React.Component {

  constructor(){
    super();
    this.showDetail = this.showDetail.bind(this);
    this.state = {
      render: 'mapcards'
    }
  }

  showDetail(detail) {
    console.log(this.state);
    this.setState({
      render: 'detail',
    });
  }

  hideDetail(mapcards) {
    console.log(this.state);
    this.setState({
      render: 'mapcards',
    });
  }

  render() {

    if(this.state.render == 'mapcards') {
      return(
        <View>

          <Card full style={{backgroundColor: '#333333'}}>
            <Card.Header title={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Colisbox n°XXX</Text>} extra={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>XXX Caissons</Text>}/>
              <Card.Body>
                <View style={{height: 80, borderBottomColor: 'white', borderBottomWidth: 1}}>
                  <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>X Occupés</Text>
                  <Text style={{color: 'white', fontSize: 20}}>X Vides</Text>
                  <Text style={{color: 'white', fontSize: 20}}>X Alertes</Text>
                </View>
              </Card.Body>
            <Card.Footer content={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>10 rue du Pont, 75001 Paris</Text>} extra={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Type : Copropriété</Text>}/>
            <Card.Footer content={
              <Button
                type='primary'
                style={{backgroundColor: '#ff8c00', width: 150, borderColor:'#ff8c00', marginTop: 15, marginLeft: 120}}
                onPressIn={() => this.showDetail()}
              >
                Accéder
              </Button>
            }/>
          </Card>

        </View>
      );
    } else if(this.state.render == 'detail') {
      return(
        <BoxDetailScreen />
      )
    }
  };

}
