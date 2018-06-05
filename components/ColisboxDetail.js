import React from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
} from 'react-native';
import SegmentedControl from 'antd-mobile/lib/segmented-control';
import WhiteSpace from 'antd-mobile/lib/white-space';
import List from 'antd-mobile/lib/list';
import Button from 'antd-mobile/lib/button';
import Accordion from 'antd-mobile/lib/accordion';
import { Ionicons } from '@expo/vector-icons';

export default class ColisBoxDetail extends React.Component {
  // static navigationOptions = {
  //   header: null,
  //   title: 'COLISBOX N°XXX',
  //   headerStyle: { backgroundColor: 'black' },
  //   headerTintColor: '#ff8c00',
  // };

  render() {

    onChange = (key) => {
   console.log(key);
 }

    return(
      <ScrollView style={{backgroundColor: '#333333'}}>
        <View style={{alignItems: 'center', backgroundColor: '#333333'}}>
          <SegmentedControl
            selectedIndex={0}
            values={['Visualisation', 'Configuration', 'Paramétrage']}
            tintColor='#ff8c00'
            style={{width: 400, height: 40, marginTop: 15}}
           />
        </View>

        <WhiteSpace size="lg" />

        <View>
          <Text style={{color: 'white', fontSize: 25, marginLeft: 15}}>
            21 Caissons dont 3 réfrigérés
          </Text>
          <WhiteSpace size="md" />
          <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
            Type : Copropriété
          </Text>
          <WhiteSpace size="md" />
          <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
            Adresse : 52 rue Rambuteau, 75003 Paris, France
          </Text>
        </View>

        <WhiteSpace size="lg" />
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/colisboxPic.jpg')}
            style={{width: 400, height: 500}}
          />
        </View>
        <WhiteSpace size="lg" />

          <List renderHeader={() => 'Statuts des Boxes'}>
            <List.Item extra={'10'}>Boxes occupées</List.Item>
            <List.Item extra={'8'}>Boxes vides</List.Item>
          </List>
          <Accordion defaultActiveKey="0">
            <Accordion.Panel header="Boxes en alertes" style={{backgroundColor: 'white'}}>
             <List>
               <List.Item>Délai : 1</List.Item>
               <List.Item>Ouvert : 1</List.Item>
               <List.Item>Température : 1</List.Item>
             </List>
            </Accordion.Panel>
          </Accordion>

          <Button type="primary" style={{backgroundColor: '#ff8c00', width: 'auto', borderColor:'#ff8c00', marginTop: 20, marginBottom: 200}}>Liste des Boxes</Button>

      </ScrollView>
    );
  };

}
