
import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,SafeAreaView,Image,TouchableOpacity,TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import from local files
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {useState} from 'react';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const AllFeedback = ({navigation}) => {
    return (
      <ScrollView style={allfeedbackstyle.scrollView}>
        <SafeAreaView style={allfeedbackstyle.backgroundscreen}>
          <View style={allfeedbackstyle.userdataview}>
            <View>
              <Text style={allfeedbackstyle.name}>Very Good App</Text>
              <Text style={allfeedbackstyle.email}>abc@abc.com</Text>
            </View>

            <View style={allfeedbackstyle.buttons}>
              <TouchableOpacity>
                <View style={allfeedbackstyle.buttoncolor}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../images/editvector.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigation.navigate('')}>
                <View style={allfeedbackstyle.buttoncolor}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../images/rightarrow.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
}






const allfeedbackstyle = StyleSheet.create({
  backgroundscreen: {
   
    backgroundColor:'#F1F2F0',
    marginHorizontal:20

  },
  scrollView: {
    overflow:'visible'
  
  },
  userdataview: {
     marginTop:20,
    shadowColor: "#000",
    borderRadius:25,
shadowOffset: {
	width: 0,
	height: 11,
  borderRadius:10,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
    padding:10,
    backgroundColor:'white',
    
    
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttoncolor:{
    backgroundColor:'#82CB56',
    padding:7,
    borderRadius:20,
    margin:5
  },
  buttons:{
    flexDirection:'row'
  },
  name:{
    fontSize:17,
    fontWeight:'700'
  },
  email:{
    fontWeight:'600'
  }
   
});

export default AllFeedback
