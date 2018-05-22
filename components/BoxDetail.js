import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Card from 'antd-mobile/lib/card';
import Button from 'antd-mobile/lib/button';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class BoxDetail extends React.Component {

  render() {
    return(

      <View>

        <Card full style={{backgroundColor: '#333333'}}>
          <Card.Header title={<Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>Colixbox n°XXX - Taille X</Text>} extra={<Text style={{color: 'white', fontSize: 18, textAlign: 'right'}}>Picto</Text>}/>
            <Card.Body>
              {/* <View style={{height: 80, borderBottomColor: 'white', borderBottomWidth: 1}}> */}
                {/* <Text style={{color: 'white', fontSize: 20, marginTop: 10}}></Text>
                <Text style={{color: 'white', fontSize: 20}}></Text>
                <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}></Text> */}

                <List className="detail-list">
                  <Item multipleLine extra="XX-XX-XXXXXX">
                    Numéro du colis
                  </Item>
                  <Item multipleLine extra="XXXXXXXXXX">
                    Nom du destinataire
                  </Item>
                  <Item multipleLine extra="XX-XX-XX-XX-XX">
                    Numéro de téléphone
                  </Item>
                  <Item multipleLine extra="JJMM - HH:MM">
                    Date de dépôt
                  </Item>
                  <Item multipleLine extra="JJMM au JJMM">
                    Délai de retrait
                  </Item>
                  <Item multipleLine extra="Oui">
                    Réfrigéré
                  </Item>
                  <Item multipleLine extra="Non">
                    Alerte
                  </Item>
                </List>

              {/* </View> */}
            </Card.Body>
          <Card.Footer content={
            <Button type='primary' style={{backgroundColor: '#ff8c00', borderColor:'#ff8c00', width: 140, marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              SMS relance
            </Button>} extra={
            <Button type='primary' style={{backgroundColor: '#ff8c00', borderColor:'#ff8c00', width: 140, marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              SMS libre
            </Button>}
          />
          {/* <Card.Footer content={<Button type='primary' style={{backgroundColor: '#ff8c00', width: 150, borderColor:'#ff8c00', marginTop: 15, marginLeft: 120}}>SMS relance</Button>}/>
          <Card.Footer content={<Button type='primary' style={{backgroundColor: '#ff8c00', width: 150, borderColor:'#ff8c00', marginTop: 15, marginRight: 120}}>SMS libre</Button>}/> */}
        </Card>

      </View>

    );
  };

}
