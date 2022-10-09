import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Dimensions, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';
import CalledButton from '../components/CalledButton';

const called = [
  { name: 'Davi', distance: 20, id: 149, imgProfile: '../assets/peoples/people1.png', imgCar: '../assets/cars/car1.png' },
  { name: 'Mauricio', distance: 40, id: 150, imgProfile: '../assets/peoples/people1.png', imgCar: '../assets/cars/car1.png'  },
  { name: 'Ocatvio', distance: 30, id: 151, imgProfile: '../assets/peoples/people1.png', imgCar: '../assets/cars/car1.png'  },
  { name: 'Andre', distance: 25, id: 152, imgProfile: '../assets/peoples/people1.png', imgCar: '../assets/cars/car1.png'  },
  { name: 'Vinicios', distance: 35, id: 153, imgProfile: '../assets/peoples/people1.png', imgCar: '../assets/cars/car1.png'  },
]

function Home({ navigation }) {
  const [followUser, setFollowUser] = useState(true)
  const [calledList, setCalledList] = useState(false)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  var mapStyle = [
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#f7d882"
        },
        {
          "weight": 3.5
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#cdd6e5"
        }
      ]
    }
  ]

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  })

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        showsUserLocation={true}
        rotateEnabled={false}
        scrollEnabled={true}
        zoomEnabled={true}
        onPress={() => setCalledList(false)}
        onPanDrag={() => setCalledList(false)}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        followsUserLocation={followUser}
        onRegionChange={() => { setFollowUser(false) }}
      ></MapView>

      <View style={styles.topMenuContainer}>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <Feather name="menu" size={30} color="white" />
          <TextInput
            style={{ borderColor: '#FFF', borderWidth: 1.5, color: '#FFF', fontSize: 14, borderRadius: 100, padding: 12, width: Dimensions.get('window').width - 85 }}
            placeholder="Buscar"
            placeholderTextColor={'#FFF'}
          />
        </View>

        {!calledList &&
          <TouchableOpacity
            style={{ backgroundColor: '#FEC31F', height: 55, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 20, flexDirection: 'row' }}
            onPress={() => setCalledList(true)}
          >
            <FontAwesome name="location-arrow" size={24} color="black" />
            <Text style={{ fontWeight: '700', fontSize: 20 }}> VER CHAMADOS</Text>
          </TouchableOpacity>
        }

        {calledList &&
          <ScrollView style={{ maxHeight: 340, borderRadius: 40, marginTop: 20 }}>
            {called.map(({ name, distance, id, imgProfile, imgCar }) => (
              <CalledButton key={id} name={name} distance={distance} id={id} />
            ))}
          </ScrollView>
        }


      </View>

      <ScrollView
        horizontal={true}
        style={styles.btnBottomContainer}
      >
        <View style={styles.btnBottom}>
          <Image source={require('../assets/icons/receipt.png')} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF', width: '100%' }}>Lista Orçamentos</Text>
        </View>
        <View style={styles.btnBottom}>
          <Image source={require('../assets/icons/pos-terminal.png')} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF', width: '100%' }}>Métodos Pagamentos</Text>
        </View>
        <View style={styles.btnBottom}>
          <Image source={require('../assets/icons/file.png')} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF', width: '100%' }}>Histórico Chamados</Text>
        </View>
        <View style={styles.btnBottom}>
          <Image source={require('../assets/icons/bell.png')} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF', width: '100%' }}>Lista Notificações</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  topMenuContainer: {
    backgroundColor: '#383838',
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  btnBottomContainer: {
    width: '100%',
    maxHeight: 140,
    marginStart: 5,
    marginEnd: 5,
  },
  btnBottom: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 100,
    height: 110,
    borderRadius: 12,
    marginStart: 5,
    marginEnd: 5,
    backgroundColor: '#383838',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  }
});

export default Home;