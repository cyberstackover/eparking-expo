'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AsyncStorage,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Item, Input, Form, Thumbnail, Label, Button, Text} from 'native-base';
import GlobalConfig from '../GlobalConfig';

var jwtDecode = require('jwt-decode');

class loginform extends Component {
    constructor() {
      super(); 
      this.state = {
        username : 'abdul',  
        password : 'abdul',
        success : ''
      }
    }

    // Decode
    parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    };

    handleClick(){
      fetch(GlobalConfig.SERVERHOST+'/index.php/api/auth', {
       method: 'POST',
       headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
        // body : 
        body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
             })
        })
        .then((response) => response.json())
        .then((response) => {
              //  alert(JSON.stringify(response));
                if (response.status == true) {
                   AsyncStorage.setItem('tokenUser', response.response).then(() => { 
                    // Save User Data
                      AsyncStorage.setItem('dataUser', JSON.stringify(jwtDecode(response.response))).then(() => { 
                        this.props.data.navigate('Dashboard');
                      })
                  })

                }else{ 
                  alert("Gagal Login");
                }

        }).done();
  }

  render() {
    return (
      <Content style={styles.contentLogin}>
            <View style={styles.center}>
            <Image source={require('../../Images/logo.png')} style={styles.images}/>
            <Text>{'\n'}</Text>
                    <Text style={styles.font1}>Hangar Parking Management</Text>
            </View> 
          
            <Form style={styles.formLogin}>
            <Item>
              <Input value={this.state.username} style={styles.st_inputfnt} placeholder='Username' placeholderTextColor='white' onChangeText={(text) => this.setState({username:text})}/>
            </Item>
            <Item>
              <Input value={this.state.password} style={styles.st_inputfnt} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={(text) => this.setState({password:text})}/>
            </Item>
          </Form>
          
            <Button block info style={styles.footerBottom} onPress={() => this.handleClick()}>
              <Text>Sign in</Text>
          </Button>

        </Content>
    );
  }
}

const styles = StyleSheet.create({
  footerBottom:{
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  formLogin : {
    marginTop :30,
    paddingLeft : 10,
    paddingRight : 30,
  },
  contentLogin : {
    marginTop : 10,
  },
  images:{
      marginTop: 80,
      borderRadius: 20,
  },
  font1:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
  center:{
      flex: 1,
        alignItems: 'center',
  },
  footerBottomSignUp:{
      marginTop: 56,
      alignItems: 'center', 
    },
  st_signup:{
      color: 'white',
      fontWeight: '500', 
    },
  st_inputfnt:{
      color: 'white',
  }
});

export default loginform;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;