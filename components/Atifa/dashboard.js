 import * as React from 'react';
import {Image, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect} from 'react'
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App({navigation}) {

  const SettingUserData = async () => {
    try {
         console.log('Entered try');
      
      setError(false);
      const config = {
        "Content-type": "application/json",
      };

      const {data} = await axios
        .post(
          'http://10.0.2.2:8000/users/api/login/',
          {
            username,
            password,
          },
          config,
        )
        .then(data => {
          console.log(data.data);
          setError(false);
          setsuccessfull(true);
          AsyncStorage.setItem("token",data.data.token)
          setsuccessfullmessage('Login Successful.. Redirecting');
          navigation.navigate("TabUser")
        })
        .catch(err => {
          // setError("Invalid Email or Password");
          setsuccessfull(false);
          setError(true);
          setErrormessage('Invalid Username or Password');
          console.log(err.message)
          console.log('Noob');
        });
    } catch (error) {}
  };
  
  useEffect(() => {
    
  })


  return (
    <View style={{backgroundColor: '#F1F2F0', marginBottom:30}}>
    <View style={{ margin: 50, }}>
        <Text style={{ color: '#91A37F' }}>Welcome to GREEN ACRES</Text>

        <Text style={{fontSize: 18, fontWeight:'bold' }}>Help Us to Save the Mother Earth</Text>
        </View>
        
        <TouchableOpacity style={{
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
          </TouchableOpacity>

      
       <TouchableOpacity onPress={()=>navigation.navigate('Plant Disease')} style={{
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
          </TouchableOpacity>

           <TouchableOpacity style={{
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
          </TouchableOpacity>

        

    
    </View>
  );
}


