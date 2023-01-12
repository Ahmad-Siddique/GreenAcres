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
  AsyncStorage
} from 'react-native';

import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import from local files

import {useState,useEffect} from 'react';
// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';

const UserFeedback = ({navigation,route}) => {
  const {id} = route.params
   const [show, setshow] = useState(false);
  const [userfeedback,setuserfeedback] = useState([])
   const handleshow = () => {
     setshow(!show);
   };
   

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
        .get('http://10.0.2.2:8000/feedback/api/viewfeedback/2', {
          headers: {
            Authorization: 'token ' + admintoken,
          },
        })
        .then(data => {
          console.log('GGWP');
          setuserfeedback(data.data);
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
    <SafeAreaView style={userfeedbackstyle.backgroundscreen}>
      <View style={userfeedbackstyle.userdataview}>
        <View style={userfeedbackstyle.userinfo}>
          <Text style={userfeedbackstyle.name}>Name:</Text>
          <Text style={userfeedbackstyle.email}> {userfeedback.username}</Text>
        </View>

        <View style={userfeedbackstyle.userinfo}>
          <Text style={userfeedbackstyle.name}>Email: </Text>
          <Text style={userfeedbackstyle.email}> {userfeedback.email}</Text>
        </View>
      </View>

      <View style={userfeedbackstyle.userdataviewfeedback}>
        <View style={userfeedbackstyle.feedbackblock}>
          <Text style={userfeedbackstyle.feedbackheading}>FEEDBACK </Text>
          <ScrollView style={userfeedbackstyle.scrollView}>
            <Text style={userfeedbackstyle.feedbackdata}>
              {userfeedback.feedback}
            </Text>
          </ScrollView>
        </View>
      </View>

      <View style={userfeedbackstyle.userdataview}>
        <View style={userfeedbackstyle.userinfo}>
          <Text style={userfeedbackstyle.rating}>Rating: </Text>
          <Text style={userfeedbackstyle.ratingno}>{userfeedback.rating}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const userfeedbackstyle = StyleSheet.create({
  backgroundscreen: {
    backgroundColor: '#F1F2F0',
    marginHorizontal: 20,
  },
  scrollView: {},
  userdataview: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20,

    justifyContent: 'space-between',
    borderRadius: 30,
  },
  userdataviewfeedback: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20,

    justifyContent: 'space-between',
    borderRadius: 30,
    height: '50%',
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
    fontSize: 20,
    fontWeight: '800',
  },
  email: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 1.2,
  },
  userinfo: {
    flexDirection: 'row',
    marginTop: 10,
  },

  feedbackblock: {
    marginTop: 5,
  },

  feedbackheading: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },

  feedbackdata: {
    fontSize: 17,
    textAlign: 'justify',
    
  },

  rating: {
    fontSize: 25,
    fontWeight: '800',
  },

  ratingno: {
    fontWeight: '700',
    fontSize: 25,
    letterSpacing: 1.2,
    color: '#A4CC02',
  },
});

export default UserFeedback;
