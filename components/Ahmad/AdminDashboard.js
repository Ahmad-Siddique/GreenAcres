
import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,SafeAreaView,Image,TouchableOpacity,TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import from local files
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {useState} from 'react';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const AdminDashboard = () => {
  return (
    <View style={{backgroundColor: '#F1F2F0'}}>
      <ScrollView style={{overflow: 'visible'}}>
        <View style={{margin: 10}}>
          <Text style={{color: '#91A37F'}}>Welcome to GREEN ACRES</Text>

          <Text style={styles.helpus}>Help Us to Save the Mother Earth</Text>

          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,

              elevation: 13,
              width: '100%',
              height: '40%',
              borderRadius: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 50,
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 100, marginRight: 10, height: 100}}
              source={require('../../images/Users.png')}
            />
            <Text style={styles.textBold}>All Users Details</Text>
          </View>

          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              
              elevation: 13,
              width: '100%',
              height: '40%',
              borderRadius: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 50,
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 100, marginRight: 10, height: 100}}
              source={require('../../images/Popularwoman.png')}
            />
            <Text style={styles.textBold}>All Users Details</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontSize: 20,
    fontWeight: '700',
  },
  helpus: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AdminDashboard;