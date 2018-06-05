import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Card from 'antd-mobile/lib/card';
import Button from 'antd-mobile/lib/button';
import { List } from 'antd-mobile';
import { Ionicons } from '@expo/vector-icons';

// import {Header} from 'react-native-elements';
import MapCards from '../components/MapCards';

const Item = List.Item;
const Brief = Item.Brief;

export default class BoxDetailScreen extends React.Component {

  constructor() {
    super();
    this.backToMap = this.backToMap.bind(this);
    this.state = {
      mapView: "hidden",
    }
    console.log(this.state);
  }

  backToMap() {
    this.setState({
      mapView: "visible"
    });
    console.log(this.state);
  }

  render() {

  if(this.state.mapView == 'visible') {
    return(
      <MapCards />
    )
  } else {

      return(

        <View>
          <TouchableOpacity
            onPressIn={() => this.backToMap()}
            paddingTop={50}
          >
            <Ionicons name="ios-arrow-back" size={22} color="#ff8c00"/>
            <Text>Back to the list</Text>
          </TouchableOpacity>
          <Card full style={{backgroundColor: '#333333'}}>
            <Card.Header title={<Text style={{color: 'white', fontSize: 16, textAlign: 'left'}}>Colixbox n°XXX - Taille X</Text>} extra={<Text style={{color: 'white', fontSize: 16, textAlign: 'right'}}>Picto</Text>}/>
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
              //For Android instead of the ; use a ?
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
    }
  };

}
