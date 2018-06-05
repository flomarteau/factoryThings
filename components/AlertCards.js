import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Card from 'antd-mobile/lib/card';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

export default class AlertCards extends React.Component {

  // deleteCard(){
  //   cardList.splice(i,1)
  // };

  render() {

    var consigne = [
      {icon: 'md-alert', numeroBox: 1, numeroCaisson: 2, message: 'Caisson ouvert', adresse: '52 Rue Rambuteau, 75003 Paris, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 2, numeroCaisson: 4, message: 'Température non adaptée', adresse: '139 Avenue Daumesnil, 75012 Paris, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 3, numeroCaisson: 8, message: 'Délai enlèvement dépassé', adresse: '159 Boulevard Macdonald, 75019 Paris, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 4, numeroCaisson: 13, message: 'Caisson ouvert', adresse: '12 Rue François Mitterrand, 94200 Ivry-sur-Seine, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 2, numeroCaisson: 9, message: 'Température non adaptée', adresse: '139 Avenue Daumesnil, 75012 Paris, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 1, numeroCaisson: 7, message: 'Caisson ouvert', adresse: '52 Rue Rambuteau, 75003 Paris, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 4, numeroCaisson: 15, message: 'Caisson ouvert', adresse: '12 Rue François Mitterrand, 94200 Ivry-sur-Seine, France', type: 'Copropriété'},
      {icon: 'md-alert', numeroBox: 3, numeroCaisson: 16, message: 'Délai enlèvement dépassé', adresse: '159 Boulevard Macdonald, 75019 Paris, France', type: 'Copropriété'},
    ];

    var cardList = [];

    var swipeoutBtns = [
        {text: 'Supprimer',
         backgroundColor: 'red',
         onPress: () => { console.log('coucou') },
       }
      ];


    for (var i = 0; i< consigne.length; i++){
      cardList.push(
      <Swipeout key={i} right={swipeoutBtns} autoClose={true}>
        <Card full style={{backgroundColor: '#333333', marginBottom: 5}}>
          <Card.Header title={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Colixbox n°{consigne[i].numeroBox}</Text>} extra={<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Caisson n°{consigne[i].numeroCaisson}</Text>}/>
            <Card.Body>
              <View style={{height: 50, borderBottomColor: '#6b6b6b', borderBottomWidth: 1, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name={consigne[i].icon} size={32} color="#ff8c00" style={{marginRight: 10}} />
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 0}}>{consigne[i].message}</Text>
              </View>
            </Card.Body>
          <Card.Footer content={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>{consigne[i].adresse}</Text>} extra={<Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Type : {consigne[i].type}</Text>}/>
        </Card>
      </Swipeout>
      );
    }

    return(
      <View>
          {cardList}
      </View>
    );
  };

}
