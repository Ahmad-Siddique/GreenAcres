import * as React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
    View,
    Image,
  
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <View style={{alignSelf: 'center'}}>
      <Text
        style={{
          marginTop: 50,
          alignSelf: 'center',
          fontSize: 19,
          alignItems: 'center',
          fontWeight: 'bold',
          color: '#394929',
          fontfamily: 'Lexend',
        }}>
        Open your camera to detect Plant Disease
      </Text>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            marginTop: 100,
            alignSelf: 'center',
            fontSize: 13.5,
            alignItems: 'center',
            color: '#394929',
            fontfamily: 'Lexend',
          }}>
          Click on the camera button to open camera
        </Text>
      </View>
      <View style={{margin: 20, justifyContent: 'center', alignSelf: 'center'}}>
        <TouchableOpacity
          style={{
            shadowOffset: {height: 1, width: 1},
            shadowOpacity: 0.5,
            shadowRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#80C855',
            borderRadius: 20,
            width: 145,
            height: 125,
            alignItems: 'center',
          }}>
          <Image source={require('../../images/Userplantdisease_camera.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
