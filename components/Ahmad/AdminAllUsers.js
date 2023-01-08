import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {Card} from 'react-native-paper';

const AllUsers = () => {
  return (
    <ScrollView style={alluserstyle.scrollView}>
      <SafeAreaView style={alluserstyle.backgroundscreen}>
        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={alluserstyle.userdataview}>
          <View>
            <Text style={alluserstyle.name}>Muhammad Ahmad</Text>
            <Text style={alluserstyle.email}>abc@abc.com</Text>
          </View>

          <View style={alluserstyle.buttons}>
            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/editvector.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={alluserstyle.buttoncolor}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/deletevector.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
