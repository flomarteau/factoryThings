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
    
     var colisbox = [
      {numeroBox: 1, nombreCaisson: 21, type: 'Copropriété', etatOccupes: 12, etatVides: 6, etatAlertes: 3, adresse: '52 Rue Rambuteau, 75003 Paris, France'},
      {numeroBox: 2, nombreCaisson: 11, type: 'Copropriété', etatOccupes: 4, etatVides: 3, etatAlertes: 4, adresse: '139 Avenue Daumesnil, 75012 Paris, France'},
      {numeroBox: 3, nombreCaisson: 32, type: 'Copropriété', etatOccupes: 23, etatVides: 8, etatAlertes: 1, adresse: '159 Boulevard Macdonald, 75019 Paris, France'},
      {numeroBox: 4, nombreCaisson: 7, type: 'Copropriété', etatOccupes: 6, etatVides: 1, etatAlertes: 0, adresse: '12 Rue François Mitterrand, 94200 Ivry-sur-Seine, France'},
      {numeroBox: 5, nombreCaisson: 20, type: 'Copropriété', etatOccupes: 9, etatVides: 9, etatAlertes: 2, adresse: '10 Rue Pierre Leroux, 75007 Paris, France'},
      {numeroBox: 6, nombreCaisson: 28, type: 'Copropriété', etatOccupes: 15, etatVides: 12, etatAlertes: 1, adresse: '25 Avenue Pierre 1er de Serbie, 75016 Paris, France'},
      {numeroBox: 7, nombreCaisson: 32, type: 'Copropriété', etatOccupes: 11, etatVides: 19, etatAlertes: 2, adresse: '151 rue saint-denis, 75002 Paris, France'},
      {numeroBox: 8, nombreCaisson: 30, type: 'Copropriété', etatOccupes: 19, etatVides: 7, etatAlertes: 4, adresse: '38 rue d Alesia, 75014 Paris, France'},
    ];

    var mapcardList = [];

    for (var i = 0; i< colisbox.length; i++){
          mapcardList.push(
            <Card key={i} full style={{backgroundColor: '#333333', marginBottom: 5}}>
              <Card.Header title={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Colixbox n°{colisbox[i].numeroBox}</Text>} extra={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>{colisbox[i].nombreCaisson} caissons</Text>}/>
                <Card.Body>
                  <View style={{height: 'auto', borderBottomColor: 'white', borderBottomWidth: 1, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20}}>{colisbox[i].etatOccupes} Occupés</Text>
                    <Text style={{color: 'white', fontSize: 20}}>{colisbox[i].etatVides} Vides</Text>
                    <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}>{colisbox[i].etatAlertes} Alertes</Text>
                  </View>
                </Card.Body>
              <Card.Footer content={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>{colisbox[i].adresse}</Text>} extra={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Type : {colisbox[i].type}</Text>}/>
              <Card.Footer content={
                <Button
                type='primary'
                style={{backgroundColor: '#ff8c00', width: 150, borderColor:'#ff8c00', marginTop: 15, marginLeft: 120}}
                onPressIn={() => this.showDetail()}
                >
              }/>
            </Card>
          );
        }
        
  
    if(this.state.render == 'mapcards') {
      return(
        {mapcardList}   
      );
    } else if(this.state.render == 'detail') {
      return(
        <BoxDetailScreen />
      )
    }
        
  };

}
