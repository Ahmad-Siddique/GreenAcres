import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'
import {AsyncStorage} from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// Atifa
import LoginScreen from './components/Atifa/LoginScreen.js';
import UserDashboard from './components/Atifa/dashboard';
import PlantDisease from './components/Atifa/PlantDisease';
import Signup from './components/Atifa/signup';
import UpdateUserProfile from './components/Atifa/update';
import LoadingScreen from './components/Atifa/LoadingScreen.js';

// Ahmad
import AdminDashboard from './components/Ahmad/AdminDashboard';
import AdminAllUsers from './components/Ahmad/AdminAllUsers';
import AdminEditProfile from './components/Ahmad/AdminEditProfile';
import AdminLogin from './components/Ahmad/AdminLogin';
import AdminUserFeedback from './components/Ahmad/AdminUserFeedback';
import AdminAllFeedback from './components/Ahmad/AllFeedback';

const Feedback = () => {
  return (
    <View>
      <Text>Feedback</Text>
    </View>
  );
};

const TabUser = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>
            <Image
              style={{width: 25, marginRight: 10, height: 25}}
              source={require('./images/setting.png')}
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',

        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Dashboard') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            return (
              <Ionicons
                name={focused ? 'ios-list-box' : 'ios-list'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Plant Disease') {
            return (
              <Ionicons
                name={focused ? 'medkit' : 'medkit-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Feedback') {
            return (
              <Ionicons
                name={focused ? 'help-circle' : 'help-circle-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Plant Detection') {
            return (
              <Ionicons
                name={focused ? 'leaf' : 'leaf-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'green',
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
          headerShadowVisible: false,
        }}
        component={UserDashboard}
      />

      <Tab.Screen name="Plant Detection" component={SettingScreen} />
      <Tab.Screen name="Plant Disease" component={PlantDisease} />
      <Tab.Screen name="Feedback" component={Feedback} />
    </Tab.Navigator>
  );
};

const TabAdmin = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.getParent('LeftDrawerAdmin').openDrawer()
            }>
            <Image
              style={{width: 25, marginRight: 10, height: 25}}
              source={require('./images/setting.png')}
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',

        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Admin Dashboard') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'All Users') {
            return (
              <Ionicons
                name={focused ? 'people' : 'people-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'All Feedbacks') {
            return (
              <Ionicons
                name={focused ? 'help' : 'help-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'green',
      })}>
      <Tab.Screen
        name="Admin Dashboard"
        options={{
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
          headerShadowVisible: false,
          title: 'Admin Dashboard',
        }}
        component={AdminDashboard}
      />

      <Tab.Screen name="All Users" component={AdminAllUsers} />
      <Tab.Screen name="All Feedbacks" component={AdminAllFeedback} />
    </Tab.Navigator>
  );
};

const SettingScreen = () => {
  return (
    <View style={{margin: 10}}>
      <Text>Welcome to GREEN ACRES</Text>

      <Text>Help Us to Save the Mother Earth</Text>

      <View></View>
    </View>
  );
};

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen({navigation}) {
  return (
    <LeftDrawer.Navigator
      useLegacyImplementation
      id="LeftDrawer"
      screenOptions={{drawerPosition: 'right', headerLeft: false}}>
      <LeftDrawer.Screen
        options={{headerShown: false, drawerItemStyle: {height: 0}}}
        name="Dashboard"
        component={TabUser}
      />
      <LeftDrawer.Screen
        options={{headerShown: false}}
        name="Edit Profile"
        component={EditProfilingStack}
      />
      <LeftDrawer.Screen
        options={{headerShown: false}}
        name="Logout"
        component={Logouting}
      />
    </LeftDrawer.Navigator>
  );
}


const Logouting = ({ navigation }) => {
  const LogoutingAlter = async () => {
    await AsyncStorage.removeItem('token');
  };
  LogoutingAlter();


  navigation.navigate('Loading Screen');
  
 
};

// const removingItems = async ({navigation}) => {
//   // await AsyncStorage.removeItem('token');
//   // await AsyncStorage.removeItem('username');
//   // await AsyncStorage.removeItem('email');
//   // await AsyncStorage.removeItem('id');
//   navigation.navigate('UserLogin')

// }

const EditProfilingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>
            <Image
              style={{width: 25, marginRight: 10, height: 25}}
              source={require('./images/setting.png')}
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="User Profile Update" component={UpdateUserProfile} />
      <Stack.Screen name="User Feedback One" component={AdminUserFeedback} />
      <Stack.Screen name="User Profile" component={UpdateUserProfile} />
    </Stack.Navigator>
  );
};

const EditProfilingAdminStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.getParent('LeftDrawerAdmin').openDrawer()
            }>
            <Image
              style={{width: 25, marginRight: 10, height: 25}}
              source={require('./images/setting.png')}
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="Admin Profile" component={AdminEditProfile} />
      <Stack.Screen name="User Profile" component={UpdateUserProfile} />
    </Stack.Navigator>
  );
};

const UserFeedbackAdminStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Admin Profile" component={AdminEditProfile} />
    </Stack.Navigator>
  );
};

const UserDataAdminStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Feedback" component={AdminUserFeedback} />
    </Stack.Navigator>
  );
};

const LeftDrawerAdmin = createDrawerNavigator();

function LeftDrawerScreenAdmin({navigation}) {
  return (
    <LeftDrawerAdmin.Navigator
      useLegacyImplementation
      id="LeftDrawerAdmin"
      screenOptions={{drawerPosition: 'right', headerLeft: false}}>
      <LeftDrawerAdmin.Screen
        options={{headerShown: false, drawerItemStyle: {height: 0}}}
        name="Admin Dashboards"
        component={TabAdmin}
      />
      <LeftDrawerAdmin.Screen
        options={{headerShown: false, title: 'Edit Profile'}}
        name="Edit Profile Admins"
        component={EditProfilingAdminStack}
      />
      <LeftDrawerAdmin.Screen
        options={{headerShown: false}}
        name="Logout Admins"
        options={{title: 'Logout'}}
        component={LogoutingAdmin}
      />
    </LeftDrawerAdmin.Navigator>
  );
}

const LogoutingAdmin = ({ navigation }) => {
  const LogoutingAlter = async () => {
    await AsyncStorage.removeItem('admintoken')
  }
  LogoutingAlter();
  navigation.navigate('Loading Screen');
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Loading Screen"
          component={LoadingScreen}
        />
        <Stack.Screen name="UserLogin" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen
          name="TabUser"
          options={{headerShown: false}}
          component={LeftDrawerScreen}
        />
        <Stack.Screen
          name="Admin Login"
          options={{headerShown: false}}
          component={AdminLogin}
        />
        <Stack.Screen
          name="TabAdmin"
          options={{headerShown: false}}
          component={LeftDrawerScreenAdmin}
        />
        <Stack.Screen
          options={{width: 0, title: 'User Feedback'}}
          name="User Feedback One"
          component={AdminUserFeedback}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
