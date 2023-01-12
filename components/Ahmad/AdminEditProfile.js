import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import from local files
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {useState, useEffect} from 'react';
// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';
import axios from 'axios';

const AdminEditProfile = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');

  const [successfull, setsuccessfull] = useState(false);
  const [successfullmessage, setsuccessfullmessage] = useState('');
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState('');
  const [show, setshow] = useState(false);

  const handleshow = () => {
  setshow(!show)
}
  const UpdateAdminProfile = async () => {
    console.log('Entered else');
    let adminid = await AsyncStorage.getItem('adminid')
    console.log(adminid)
    try {
      console.log('Entered try');

      setError(false);
      let admintoken = await AsyncStorage.getItem('admintoken');
    admintoken = admintoken.replace(/^["'](.+(?=["']$))["']$/, '$1');
      const config = {
        'Content-type': 'application/json',
        headers:{
          Authorization: 'token '+admintoken
        }
      };

       

      await axios
         .put(
           `http://10.0.2.2:8000/users/api/update/${adminid}/`,
           {
             username,
             email
           },

           config,
         )
         .then(data => {
           console.log(data.data);

           // Second Request
            handleshow();
           setError(false);
           setsuccessfull(true);
           setsuccessfullmessage('User has been successfully updated');
           
         })
         .catch(err => {
           // setError("Invalid Email or Password");
           setsuccessfull(false);
           setError(true);
           setErrormessage('Failed to update the user');
           console.log(err.message);
           console.log('Noob');
           
           
         });
    }
    catch (error) {
      console.log(error.message)
     }
  }


  const GetUserdata = async () => {
    //  const config = {
    //    'Content-type': 'application/json',
    //    headers: {
    //      Authorization: `token ${admintoken}`,
    //    },
    //  };

    let admintoken = await AsyncStorage.getItem('admintoken');
    admintoken = admintoken.replace(/^["'](.+(?=["']$))["']$/, '$1');
 
    console.log('..' + admintoken);
    // console.log(`token ${admintoken}`);
    // console.log(`token ${admintoken}`);
    if (admintoken) {
      const data = await axios
        .get('http://10.0.2.2:8000/users/api/userdata/', {
          headers: {
            Authorization: 'token ' + admintoken,
          },
        })
        .then(data => {
          console.log('GGWP');
          setemail(data.data.email);
          setusername(data.data.username);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    GetUserdata();
  }, [show]);

  return (
    <SafeAreaView>
      <View
        style={{
          margin: 20,
        }}>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#394929',
              fontSize: 20,
              marginTop: 15,
              letterSpacing: 1.3,
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              fontWeight: 'bold',
              fontFamily: 'Lexend',
            }}>
            Make sure to click on "Change" to update the information
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
            marginTop: 70,

            flexDirection: 'row',
          }}>
          <Ionicons
            style={{paddingBottom: 10}}
            name="mail"
            color="gray"
            size={28}
          />

          <TextInput
            placeholder="Enter your email"
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
            value={email}
            onChangeText={setemail}
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
            placeholder="Enter username"
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
            value={username}
            onChangeText={setusername}
          />
        </View>

        <View
          style={{margin: 40, justifyContent: 'center', alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => UpdateAdminProfile()}
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
              CHANGE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AdminEditProfile;
