import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const CalledButton = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#FFF', height: 90, borderRadius: 100, justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: 20, flexDirection: 'row', padding: 12 }}
    >
      <Image source={require('../assets/peoples/people1.png')} style={{ backgroundColor: 'white', height: 65, width: 65, borderRadius: 100 }}></Image>
      <Image source={require('../assets/cars/car1.png')} style={{ borderWidth: 2, borderColor: 'white', backgroundColor: 'white', height: 40, width: 40, borderRadius: 100, position: 'absolute', left: 55, bottom: 10 }}></Image>
      <View style={{ marginLeft: 25, height: '100%', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>{props.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="map-marker" size={20} color="black" />
          <Text style={{ fontSize: 12, marginLeft: 5 }}>{props.distance} Km de você</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', position: 'absolute', right: 30, top: 15 }}>
        <FontAwesome5 name="car" size={40} color="#FEC31F" />
        <TouchableOpacity>
          <Text style={{ fontSize: 14, marginLeft: 5, fontWeight: '700', color: '#939393' }}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})
export default CalledButton;