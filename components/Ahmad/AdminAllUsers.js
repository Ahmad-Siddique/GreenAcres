import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { useState, useEffect } from 'react'

import axios from 'axios'

const AllUsers = ({navigation}) => {

  const [adminid, setadminid] = useState()
  const [adminemail, setadminemail] = useState();
  const [adminusername, setadminusername] = useState();
  const [admintoken, setadmintoken] = useState();
  const [allusers,setallusers]=useState()

  const [successfull, setsuccessfull] = useState(false);
  const [successfullmessage, setsuccessfullmessage] = useState('');
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState('');
  const [show,setshow] = useState(false)

  useEffect(() => {
    console.log("GG")
    AllUsersData()
  }, [show])

  const handleshow = () => {
    setshow(!show)
  }
  

  


  const AllUsersData = async () => {
    console.log("ENtered")
      const adminid1 =await AsyncStorage.getItem('adminid');
      const adminemail1 = await AsyncStorage.getItem('adminemail');
      const adminusername1 = await AsyncStorage.getItem('adminusername');
      const admintoken1 = await AsyncStorage.getItem('admintoken');
    
    
    if (adminid1) {
        console.log("Setting data")
        setadminid(adminid1);
        setadminemail(adminemail1);
        setadminusername(adminusername1);
        setadmintoken(admintoken1);
        console.log(admintoken1);
    } else {
      console.log("this happened")
        navigation.navigate('TabAdmin');
        return
      }
      try {
        console.log('Entered try');
        // console.log(JSON.parse(admintoken))

        setError(false);
        const config = {
          'Content-type': 'application/json',
          // headers: {
          //   Authorization: `token ${admintoken}`,
          // },
        };

         await axios
          .get(
            'http://10.0.2.2:8000/users/api/detailview/',

            config,
          )
          .then(data => {
            
            
              setError(false);
              setsuccessfull(true);
              
            setallusers(data.data)
            console.log("Got user data")
              
             
            
              
            
          })
          .catch(err => {
            // setError("Invalid Email or Password");
            setsuccessfull(false);
            setError(true);
            setErrormessage('Invalid Username or Password');
            console.log(err.message);
            console.log('Noob');
          });
      } catch (error) {
        console.log(error.message)
      }
  };
  


  const EditUser = () => {
    
  }

  const DeleteUser = async (id) => {
     
    console.log('Entered else');
    try {
      console.log('Entered try');

      setError(false);
      const config = {
        'Content-type': 'application/json',
      };

      

      const {data} = await axios
         .delete(
           `http://10.0.2.2:8000/users/api/delete/${id}/`,

           config,
         )
         .then(data => {
           console.log(data.data);

           // Second Request
            handleshow();
           setError(false);
           setsuccessfull(true);
           setsuccessfullmessage('User has been successfully deleted');
           
         })
         .catch(err => {
           // setError("Invalid Email or Password");
           setsuccessfull(false);
           setError(true);
           setErrormessage('Failed to delete the user');
           console.log(err.message);
           console.log('Noob');
           
           
         });
    }
    catch (error) {
      console.log(error.message)
     }
            
  }
  
  





  return (
    <ScrollView style={alluserstyle.scrollView}>
      <SafeAreaView style={alluserstyle.backgroundscreen}>
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

        {allusers &&
          allusers.map(e => {
            return (
              <View>
                {e.is_superuser == true ? null : (
                  <View style={alluserstyle.userdataview}>
                    <View>
                      <Text style={alluserstyle.name}>{e.username}</Text>
                      <Text style={alluserstyle.email}>{e.email}</Text>
                    </View>

                    <View style={alluserstyle.buttons}>
                      <TouchableOpacity onPress={EditUser}>
                        <View style={alluserstyle.buttoncolor}>
                          <Image
                            style={{width: 20, height: 20}}
                            source={require('../../images/editvector.png')}
                          />
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => DeleteUser(e.id)}>
                        <View style={alluserstyle.buttoncolor}>
                          <Image
                            style={{width: 20, height: 20}}
                            source={require('../../images/deletevector.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
      </SafeAreaView>
    </ScrollView>
  );
};

const alluserstyle = StyleSheet.create({
  backgroundscreen: {
    
    marginHorizontal: 20,
  },
  scrollView: {
    overflow: 'visible',
  },
  userdataview: {
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
      borderRadius: 10,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    borderRadius: 25,
    
    elevation: 22,
    padding: 10,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttoncolor: {
    backgroundColor: '#82CB56',
    padding: 7,
    borderRadius: 20,
    margin: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
  },
  email: {
    fontWeight: '600',
  },
});

export default AllUsers;
