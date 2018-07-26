import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,ScrollView, SafeAreaView, Button } from 'react-native';
import LoginScreen from './src/Component/Login/login';
import DashboardScreen from './src/Component/Dashboard/dashboard';
import HangarScreen from './src/Component/Dashboard/hangar';
import detailOrderHangarScreen from './src/Component/Dashboard/detailOrderHangar';
import OrderScreen from './src/Component/Order/order';
import SwiftScreen from './src/Component/Swift/swift';
import detailOrderParkingScreen from './src/Component/Order/detailOrderParking';
import editOrderParkingScreen from './src/Component/Order/editOrderParking';
import createOrderParkingScreen from './src/Component/Order/createOrderParking';
import confirmWaitingHangarScreen from './src/Component/Order/confirmWaitingHangar';
import repositionOrderParkingScreen from './src/Component/Order/repositionOrderParking';
import waitingConfirmResponse from './src/Component/Order/waitingConfirmResponse';
import confirmWaitingPreparation from './src/Component/Order/confirmWaitingPreparation';
import confirmWaitingDelivery from './src/Component/Order/confirmWaitingDelivery';
import confirmWaitingValidationmcc from './src/Component/Order/confirmWaitingValidationmcc';
import GlobalConfig from './src/Component/GlobalConfig';
import {Icon} from 'native-base';
import './src/Component/ReactotronConfig'

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

const Beranda = DrawerNavigator({
    Dashboard:{
      screen: DashboardScreen,
      navigationOptions: {
        drawerLabel: 'Dashboard', 
        drawerIcon: <Icon style={{ color: '#fff' }} name={Platform.OS === 'ios' ? 'ios-apps' : 'apps'}/>
      }
  },
    Order:{
      screen: OrderScreen, 
      navigationOptions: {
        drawerLabel: 'Order',
        drawerIcon: <Icon style={{ color: '#fff' }} name={Platform.OS === 'ios' ? 'ios-clipboard' : 'clipboard'} />
      } 
  },
    Swift:{
      screen: SwiftScreen,
      navigationOptions: {
        drawerLabel: 'Swift',
        drawerIcon: <Icon style={{ color: '#fff' }} name={Platform.OS === 'ios' ? 'ios-folder-open' : 'folder-open'} />
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
  Hangar:{
      screen: HangarScreen,
  },
  detailOrderHangar:{
    screen: detailOrderHangarScreen,
  },
  Order:{
      screen: OrderScreen,
  },
  Swift:{
    screen: SwiftScreen,
  },
  detailOrderParking:{
    screen: detailOrderParkingScreen,
  },
  createOrderParking:{
    screen: createOrderParkingScreen,
  },
  confirmWaitingHangar:{
    screen: confirmWaitingHangarScreen,
  },
  repositionOrderParking:{
    screen: repositionOrderParkingScreen,
  },
  editOrderParking:{
    screen: editOrderParkingScreen,
  },
  waitingConfirmResponse:{
    screen: waitingConfirmResponse,
  },
  confirmWaitingPreparation:{
    screen:confirmWaitingPreparation
  },
  confirmWaitingDelivery:{
    screen:confirmWaitingDelivery
  },
  confirmWaitingValidationmcc:{
    screen:confirmWaitingValidationmcc
  }
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