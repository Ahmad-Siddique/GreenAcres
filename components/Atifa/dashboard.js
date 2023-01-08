 import * as React from 'react';
import {Image, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{backgroundColor: '#F1F2F0', marginBottom:30}}>
    <View style={{ margin: 50, }}>
        <Text style={{ color: '#91A37F' }}>Welcome to GREEN ACRES</Text>

        <Text style={{fontSize: 18, fontWeight:'bold' }}>Help Us to Save the Mother Earth</Text>
        </View>
        
        <View style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
            width: '90%',
            height: '20%',
            borderRadius: 30,
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'white',
          }}> 
          <Image
            style={{ width: 100, marginRight: 10, height: 100 }}
            source={require('../../images/pic1.jpeg')}
          />
          <Text style={{fontWeight:"bold"}}>Identify Crops and fruits </Text>
          </View>

      
       <View style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
            width: '90%',
            height: '20%',
            borderRadius: 30,
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'white',
          }}> 
            <Image
            style={{ width: 100, marginRight: 10, height: 100 }}
            source={require('../../images/pic2.jpeg')}
          />
          <Text style={{fontWeight:"bold"}}>Identify Disease</Text>
          </View>

           <View style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
            width: '90%',
            height: '20%',
            borderRadius: 30,
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'white',
          }}> 
            <Image
            style={{ width: 100, marginRight: 10, height: 100 }}
            source={require('../../images/pic3.jpeg')}
          />
          <Text style={{fontWeight:"bold"}}>Learn About Plants</Text>
          </View>

        

    
    </View>
  );
}


