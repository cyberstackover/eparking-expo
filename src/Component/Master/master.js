'use strict';

import React, { Component } from 'react'; 
import { View,StyleSheet,AsyncStorage, Image} from 'react-native';
import { Container, Card, CardItem, Footer, FooterTab, Button, Header, Content, List, ListItem, Body, Item, Input, Left, Right, Icon,  Text, Title, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';

class master extends Component  {

  _handleLogOut = (navigate) => {
    AsyncStorage.removeItem('tokenUser');
    alert('You have been logged out.');
    navigate('Login');
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Master</Title>
          </Body>
          <Right />
        </Header>
        <View>
        <Image
          style={{width: 360, height: 100, marginLeft: '5%'}}
          source={{uri: 'https://www.infopenerbangan.com/wp-content/uploads/2016/12/Lowongan_Kerja_GMF_AeroASIA.jpg'}}
        />
        
        </View>
        <Button block info style={styles.footerBottom} onPress={() => this._handleLogOut(navigate)}>
                <Text>Sign Out</Text>
              </Button>
        <Content>
          
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical style={{ color: '#808080' }}
             onPress={() => navigate("Dashboard")}
            >
              <Icon style={{ color: '#808080' }} name="apps"/>
              <Text style={{ color: '#808080' }}>Dashboard</Text>
            </Button>
            <Button vertical style={{ color: '#808080' }}
             onPress={() => navigate("Order")}
            >
              <Icon style={{ color: '#808080' }} name="ios-clipboard"/>
              <Text style={{ color: '#808080' }}>Order</Text>
            </Button>
            <Button vertical active
             onPress={() => navigate("Master")}
            >
              <Icon active name="ios-folder-open"/>
              <Text>Master</Text>
            </Button> 
          </FooterTab>
        </Footer>
      </Container>
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
});
export default master;