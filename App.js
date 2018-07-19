import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ScrollView, SafeAreaView, Button } from 'react-native';
import LoginScreen from './src/Component/Login/login';
import DashboardScreen from './src/Component/Dashboard/dashboard';
import OrderScreen from './src/Component/Order/order';
import MasterScreen from './src/Component/Master/master';
import detailOrderParkingScreen from './src/Component/Order/detailOrderParking';
import createOrderParkingScreen from './src/Component/Order/createOrderParking';
import GlobalConfig from './src/Component/GlobalConfig';
import {Icon} from 'native-base';


import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

const Beranda = DrawerNavigator({

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({fontsAreLoaded: true});
  },

    Dashboard:{
      screen: DashboardScreen,
      navigationOptions: {
        drawerLabel: 'Dashboard',
        drawerIcon: <Icon style={{ color: '#fff' }} name="apps" />
      }
  },
    Order:{
      screen: OrderScreen,
      navigationOptions: {
        drawerLabel: 'Order',
        drawerIcon: <Icon style={{ color: '#fff' }} name="ios-clipboard" />
      }
  },
    Master:{
      screen: MasterScreen,
      navigationOptions: {
        drawerLabel: 'Master',
        drawerIcon: <Icon style={{ color: '#fff' }} name="ios-folder-open" />
      }
  },
 
 
}, 

{
    drawerWidth: 240,
    drawerBackgroundColor: '#04245B',
    contentOptions: {
      activeTintColor :'#FFFFFF',
       inactiveTintColor :'#FFFFFF',    
      activeBackgroundColor :'#0A3682',
      inactiveBackgroundColor :'#04245B',
    }
});

const App = StackNavigator({
  Login:{
      screen: LoginScreen,
  },
  Dashoard:{
      screen: Beranda,
  },
  Order:{
      screen: OrderScreen,
  },
  Master:{
    screen: MasterScreen,
  },
  detailOrderParking:{
    screen: detailOrderParkingScreen,
  },
  createOrderParking:{
  screen: createOrderParkingScreen,
},
 
},
  {
  headerMode: 'none',
  navigationOptions:{  
  
    header:{ 
      visible: false,
      left: null,
    },
    gesturesEnabled: false,
  },
});

export default App;