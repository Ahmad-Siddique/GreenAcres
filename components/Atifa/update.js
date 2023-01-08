import * as React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';







export default function App() {
  return (

    <SafeAreaView >
    <View
      style={{
        
        
        margin: 20,
        
      }}>

      <View style={{marginTop:30}}>
      

      <Text
        style={{
          color: '#394929',
          fontSize: 22, 
          marginTop:15,
          letterSpacing:1.3,
          textAlign: 'center',
          justifyContent: 'center',
          alignSelf:'center',
          fontWeight: 'bold',
          fontFamily: 'Lexend',
        }}>
        Make Sure to click on “Save” to update the information
      </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          marginHorizontal:40,
          marginTop:50,
          
         
          flexDirection: 'row',
        }}>
        <Ionicons style={{paddingBottom:10}} name="mail" color="gray" size={28} />

        <TextInput
          placeholder="zuzu@zuzu.com"
          style={{
            paddingBottom:10,
            paddingLeft:20,
            placeholderTextColor: 'grey',
            justifyContent:'center',
            alignSelf:'center',
            alignItems:'center',
            
            
            width:'100%',
            fontSize: 21,
            fontWeight: 'bold',
            fontFamily: 'Lexend',
            
          }}
        />
      </View>
      <View
        style={{
          margin: 33,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          
          marginHorizontal:40,
          flexDirection: 'row', 
        }}>
        <Ionicons style={{paddingBottom:10}} name="lock-closed" color="gray" size={28} />

        <TextInput
          placeholder="zuzu123"
          style={{
           paddingBottom:10,
            placeholderTextColor: 'grey',
            paddingLeft:50,
            width:'100%',
            fontSize: 21,
            fontWeight: 'bold',
            fontFamily: 'Lexend',
            textalign: 'center',
          }}
        />
      </View>
 <View
        style={{
          margin: 7,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          
          marginHorizontal:40,
          flexDirection: 'row', 
        }}>
        <Ionicons style={{paddingBottom:10}} name="call" color="gray" size={28} />

        <TextInput
          placeholder="03115050564"
          style={{
           paddingBottom:10,
            placeholderTextColor: 'grey',
            paddingLeft:30,
            width:'100%',
            fontSize: 21,
            fontWeight: 'bold',
            fontFamily: 'Lexend',
            textalign: 'center',
          }}
        />
      </View>

      <View style={{ margin: 20, justifyContent:'center',alignSelf:'center' }}>
        <TouchableOpacity
          style={{
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#80C855',
            borderRadius: 20,
            width: 200,
            height: 68,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'Lexend',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop:20}}>

        

         

       


      </View>

    
    </View>
    </SafeAreaView >
  );
}
