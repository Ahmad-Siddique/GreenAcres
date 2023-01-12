import * as React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';






const LoginScreen = ({ navigation }) => {
   

  


   const [username,setusername] = useState("")
  const [password, setpassword] = useState("")
  
  const [successfull,setsuccessfull] = useState(false)
  const [successfullmessage,setsuccessfullmessage] = useState("")
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState('');


   const LoginAuthetication = async () => {
     if(username=='admin' && password == "admin"){
       navigation.navigate('Admin Login');
     }
     else {
       console.log("Entered else")
       try {
         console.log('Entered try');
      
      setError(false);
      const config = {
        "Content-type": "application/json",
      };

      await axios
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
          // AsyncStorage.setItem("token", data.data.token)
          ValidatingUser(data.data.token);
          
          setsuccessfullmessage('Login Successful.. Redirecting');
          
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
       
       
   
     }
  
  
  const ValidatingUser = async (token) => {
    try {
      console.log('Entered try');
      console.log(token);

      setError(false);
      const config = {
        'Content-type': 'application/json',
        headers: {
          Authorization: `token ${token}`,
        },
      };

      await axios
        .get(
          'http://10.0.2.2:8000/users/api/userdata/',

          config,
        )
        .then(data => {
          console.log(data.data);
          
            setError(false);
            setsuccessfull(true);

            SettingAsyncUserData(data, token);
        
            
         
        })
        .catch(err => {
          // setError("Invalid Email or Password");
          setsuccessfull(false);
          setError(true);
          setErrormessage('Invalid Username or Password');
          console.log(err.message);
          console.log('Noob');
          throw new Error(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const SettingAsyncUserData = async (data, token) => {
    console.log(data.data, token);
    console.log('Token datatype', typeof token);
    await AsyncStorage.setItem('token', JSON.stringify(token));
    await AsyncStorage.setItem('id', JSON.stringify(data.data.id));
    await AsyncStorage.setItem('email', JSON.stringify(data.data.email));
    await AsyncStorage.setItem(
      'username',
      JSON.stringify(data.data.username),
    );
    setsuccessfullmessage('Login Successful.. Redirecting');
    navigation.navigate('TabUser');
  };




  return (
    <SafeAreaView>
      <View
        style={{
          margin: 20,
        }}>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              color: '#80C754',
              fontSize: 30,
              letterSpacing: 1.3,

              fontWeight: 'bold',
              fontFamily: 'Lexend',
            }}>
            Green Acres
          </Text>

          <Text
            style={{
              color: '#394929',
              fontSize: 29,
              marginTop: 15,
              letterSpacing: 1.3,
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              fontWeight: 'bold',
              fontFamily: 'Lexend',
            }}>
            Let’s get started!
          </Text>


          {successfull && (
            <Text style={{color: 'green', textAlign: 'center'}}>
              {successfullmessage}
            </Text>
          )}


          {error && (
            <Text style={{color: 'red', textAlign: 'center'}}>
              {errormessage}
            </Text>
          )}
        </View>
        <View
          style={{
            marginHorizontal: 20,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            marginHorizontal: 40,
            marginTop: 50,

            flexDirection: 'row',
          }}>
          <Ionicons
            style={{paddingBottom: 10}}
            name="mail"
            color="gray"
            size={28}
          />

          <TextInput
            placeholder="Enter your username"
            style={{
              paddingBottom: 10,
              paddingLeft: 20,
              placeholderTextColor: 'grey',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',

              width: '100%',
              fontSize: 21,
              fontWeight: 'bold',
              fontFamily: 'Lexend',
            }}
            value={username}
            onChangeText={setusername}
          />
        </View>
        <View
          style={{
            margin: 33,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',

            marginHorizontal: 40,
            flexDirection: 'row',
          }}>
          <Ionicons
            style={{paddingBottom: 10}}
            name="lock-closed"
            color="gray"
            size={28}
          />

          <TextInput
            placeholder="Enter  password"
            style={{
              paddingBottom: 10,
              placeholderTextColor: 'grey',
              paddingLeft: 20,
              width: '100%',
              fontSize: 21,
              fontWeight: 'bold',
              fontFamily: 'Lexend',
              textalign: 'center',
            }}
            value={password}
            onChangeText={setpassword}
          />
        </View>

        <View
          style={{margin: 20, justifyContent: 'center', alignSelf: 'center'}}>
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
              width: 200,
              height: 68,
              alignItems: 'center',
            }}
            onPress={() => {
              LoginAuthetication();
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
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              width: '45%',
              backgroundColor: 'black',
              height: 2,
              marginTop: 7,
            }}></View>

          <Text style={{marginHorizontal: 4}}>OR</Text>

          <View
            style={{
              width: '45%',
              backgroundColor: 'black',
              height: 2,
              marginTop: 7,
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              marginRigh: 30,
              color: '#9D9D9D',
              fontWeight: 'bold',
              fontFamily: 'Lexend',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                color: '#76BA4C',
                fontWeight: 'bold',
                fontFamily: 'Lexend',
                marginLeft: 20,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}



export default LoginScreen;

