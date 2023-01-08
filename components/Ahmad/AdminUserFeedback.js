
import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,SafeAreaView,Image,TouchableOpacity,TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import from local files

import {useState} from 'react';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';


const UserFeedback = () =>{
   return (


    <SafeAreaView style={userfeedbackstyle.backgroundscreen}>


   


      <View style={userfeedbackstyle.userdataview}>
        
        <View style={userfeedbackstyle.userinfo}>


          <Text style={userfeedbackstyle.name}>Name: </Text>
          <Text style={userfeedbackstyle.email}>abc@abc.com</Text>

        </View>


         <View style={userfeedbackstyle.userinfo}>


          <Text style={userfeedbackstyle.name}>Email: </Text>
          <Text style={userfeedbackstyle.email}>abc@abc.com</Text>

        </View>

      </View>








      <View style={userfeedbackstyle.userdataviewfeedback}>
        
        <View style={userfeedbackstyle.feedbackblock}>


          <Text style={userfeedbackstyle.feedbackheading}>FEEDBACK </Text>
          <ScrollView style={userfeedbackstyle.scrollView}>
          <Text style={userfeedbackstyle.feedbackdata}>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          </Text>
  </ScrollView>
        </View>

      </View>


      <View style={userfeedbackstyle.userdataview}>

         <View style={userfeedbackstyle.userinfo}>


          <Text style={userfeedbackstyle.rating}>Rating:  </Text>
          <Text style={userfeedbackstyle.ratingno}>4.5</Text>

        </View>

      </View>


  
    </SafeAreaView>
  )
}






















const userfeedbackstyle = StyleSheet.create({
  backgroundscreen: {
   
    backgroundColor:'#F1F2F0',
    marginHorizontal:20

  },
  scrollView: {
    
  
  },
  userdataview: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
    padding:20,
    backgroundColor:'white',
    marginTop:20,
    
    
    
    justifyContent:'space-between',
     borderRadius:30
  },
  userdataviewfeedback:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
    padding:20,
    backgroundColor:'white',
    marginTop:20,
    
    
    
    justifyContent:'space-between',
     borderRadius:30,
     height:'50%',
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
    fontSize:20,
    fontWeight:'800',
    
  },
  email:{
    fontWeight:'700',
    fontSize:20,
    letterSpacing:1.2,
  
    
    
  },
  userinfo:{
    flexDirection:'row',
    marginTop:10,
    
  },

  feedbackblock:{
    marginTop:5,
    
  },

  feedbackheading:{

    textAlign:'center',
    justifyContent:'center',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'700',
    marginBottom:10,
    
    

  },

  feedbackdata:{
    fontSize:17,
    textAlign:'justify',
    height:'50%'
  },

  rating:{
    fontSize:25,
    fontWeight:'800',
  },

  ratingno:{
    

    fontWeight:'700',
    fontSize:25,
    letterSpacing:1.2,
    color:"#A4CC02"
  }

  




   
});

export default UserFeedback