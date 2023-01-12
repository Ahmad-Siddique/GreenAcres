
import * as React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
    View,
    ImageBackground, 
    Button,
   
    
  Image,
  StyleSheet
} from 'react-native';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
const LoadingScreen = ({ navigation }) => {
    
    const [token, settoken] = useState()
    const [admintoken, setadmintoken] = useState()
    
    React.useEffect(() => {
        settingTokens()
    })

    const settingTokens = async () => {
 setadmintoken( await AsyncStorage.getItem('admintoken'));
 settoken(await AsyncStorage.getItem('token'));
    }
    const Navigating = async () => {
       
        if (token) {
            navigation.navigate("TabUser")
        }
        else if (admintoken) {
            navigation.navigate("TabAdmin")
        }
        else {
            navigation.navigate("UserLogin")
        }

        // navigation.navigate("UserLogin")
        
    };

  return (
    <ImageBackground
      source={require('../../images/loadingbackground.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{backgroundColor: '#274116', height: '40%'}}>
        <Text style={styles.text}>Green Acres</Text>
        <Text style={styles.detect}>DETECT THE FRUITS AND CROPS WITH US</Text>
              <View style={{ width: '35%', justifyContent: 'center', alignSelf:'center',marginTop:30}}>
          <Button onPress={()=>Navigating()}
            title="Get Started"
            backgroundColor="#569033"
            color="#569033"
            style={{borderRadius: 20, padding: 20,fontWeight:'700'}}></Button>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10
    
    },
    detect: {
        textAlign: 'center',
        fontWeight:'400',
        fontSize: 20,
        color: 'white',
        marginHorizontal: 40,
        
        
  }
});
export default LoadingScreen