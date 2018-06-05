import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapGoogle extends React.Component {

  filter(){
    console.log('coucou');
  }
      
  render() {

    var LeroyMerlin = [
      {numero: 'ColisBox n°1', detail: '52 Rue Rambuteau, 75003 Paris, France', lat: 48.8616653, lng: 2.3519185999999763, color: 'blue'},
      {numero: 'ColisBox n°2', detail: '139 Avenue Daumesnil, 75012 Paris, France', lat: 48.8427854, lng: 2.3856177000000116, color: 'red'},
      {numero: 'ColisBox n°3', detail: '159 Boulevard Macdonald, 75019 Paris, France', lat: 48.89842429999999, lng: 2.3774021000000403, color: 'yellow'},
      {numero: 'ColisBox n°4', detail: '12 Rue François Mitterrand, 94200 Ivry-sur-Seine, France', lat: 48.8238934, lng: 2.387490899999989, color: 'green'}
    ]

    var markerList = []

    for (var i = 0; i < LeroyMerlin.length; i++){
      markerList.push(
        <MapView.Marker
          key={i}
          coordinate={{
            latitude: LeroyMerlin[i].lat,
            longitude: LeroyMerlin[i].lng
          }}
          title={LeroyMerlin[i].numero}
          description={LeroyMerlin[i].detail}
          pinColor={LeroyMerlin[i].color}
        />
      );
    }

    var mapStyle = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 48.852968,
            longitude: 2.349902,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
        { markerList }
        <Ionicons onPress={() => this.filter()} name='ios-arrow-dropdown-circle' size={50} color="#ff8c00" style={{position: 'absolute', top: 10, right: 10}} />

        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
