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

















export default function App({navigation}) {
  return (

    <SafeAreaView >
    <View
      style={{
        
        
        margin: 20,
        
      }}>

      <View style={{marginTop:30}}>
      <Text
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignSelf:'center',
          color: '#80C754',
          fontSize: 30,
          letterSpacing:1.3,
         
          fontWeight: 'bold',
          fontFamily: 'Lexend',
        }}>
        Green Acres
      </Text>

      <Text
        style={{
          color: '#394929',
          fontSize: 29,
          marginTop:15,
          letterSpacing:1.3,
          textAlign: 'center',
          justifyContent: 'center',
          alignSelf:'center',
          fontWeight: 'bold',
          fontFamily: 'Lexend',
        }}>
        Let’s get started!
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
          placeholder="Enter your email"
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
          placeholder="Enter  password"
          style={{
           paddingBottom:10,
            placeholderTextColor: 'grey',
            paddingLeft:20,
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
        <Ionicons style={{paddingBottom:10}} name="lock-closed" color="gray" size={28} />

        <TextInput
          placeholder="Re-Enter  password"
          style={{
           paddingBottom:10,
            placeholderTextColor: 'grey',
            paddingLeft:20,
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
          margin: 33,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          
          marginHorizontal:40,
          flexDirection: 'row', 
        }}>
        <Ionicons style={{paddingBottom:10}} name="call" color="gray" size={28} />

        <TextInput
          placeholder="Enter Phone Number"
          style={{
           paddingBottom:10,
            placeholderTextColor: 'grey',
            paddingLeft:20,
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
          }}
          
          onPress={()=>{navigation.navigate("TabUser")}}
          >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'Lexend',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop:20}}>

        <View style={{width:'45%',backgroundColor:'black',height:2,marginTop:7,}}>
        
        </View>

          <Text style={{marginHorizontal:4}}>
            OR
          </Text>

        <View style={{width:'45%',backgroundColor:'black',height:2,marginTop:7,}}>
        
        </View>


      </View>

      <View style={{ flexDirection: 'row', justifyContent:'center',alignSelf:'center',marginTop:30}}>
        <Text
          style={{
            marginRigh: 30,
            color: '#9D9D9D',
            fontWeight: 'bold',
            fontFamily: 'Lexend',
          }}>
          {' '}
          Already have an account?
        </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("UserLogin")}}>
          <Text
            style={{
              color: '#76BA4C',
              fontWeight: 'bold',
              fontFamily: 'Lexend',
              marginLeft: 20,
            }}>
            {' '}
            Log In{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView >
  );
}