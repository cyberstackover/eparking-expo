import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Button, TabHeading, Body,Text,Title, ScrollableTab ,Card, CardItem, Icon, Right, Footer,FooterTab } from 'native-base';
import { View,StyleSheet, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Allhanggar from './allhanggar';
import Hanggar1 from './hanggar1';
import Hanggar2 from './hanggar2';
import Hanggar3 from './hanggar3';
import Hanggar4 from './hanggar4';

export default class dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = { initialPage: 0, activeTab: 1 }
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
            <Title>eParking GMF</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
    <Tabs renderTabBar={()=> <ScrollableTab /> } tabBarPosition="top" initialPage={this.state.initialPage} page={this.state.activeTab}>
          <Tab heading="All Hanggar" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Grid style={styles.distance}>   
            <View>
              <Image style={{width: 440, height: 250}}
                source={require('../../Images/dashboard.png')}
              />
            </View>
          </Grid>
          <Allhanggar data={this.props.navigation} />
          </Tab>

          <Tab heading="Hanggar 1" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
          <View>
              <Image style={{width: 440, height: 250}}
                source={require('../../Images/hanggar1.png')}
              />
            </View>
          </Grid>
          <Hanggar1 data={this.props.navigation} />
          </Tab>

          <Tab heading="Hanggar 2" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
          <View>
              <Image style={{width: 440, height: 250}}
                source={require('../../Images/hanggar2.png')}
              />
            </View>
          </Grid>
          <Hanggar2 data={this.props.navigation} />
          </Tab>

          <Tab heading="Hanggar 3" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
          <View>
              <Image style={{width: 440, height: 250}}
                source={require('../../Images/hanggar3.png')}
              />
            </View>
          </Grid>
          <Hanggar3 data={this.props.navigation} />
          </Tab>

          <Tab heading="Hanggar 4" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Grid style={styles.distance}>
          <View>
              <Image style={{width: 440, height: 250}}
                source={require('../../Images/hanggar4.png')}
              />
            </View>
          </Grid>
          <Hanggar4 data={this.props.navigation} />
          </Tab>
        </Tabs>
      
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical active
            onPress={() => navigate("Dashboard")}
            >
              <Icon active name="apps"/>
              <Text>Dashboard</Text>
            </Button>  
            <Button vertical style={{ color: '#808080' }}
            onPress={() => navigate("Order")}
            >
              <Icon style={{ color: '#808080' }} name="ios-clipboard"/>
              <Text style={{ color: '#808080' }}>Order</Text>
            </Button>
            <Button vertical 
            onPress={() => navigate("Master")}
            >
              <Icon style={{ color: '#808080' }} name="ios-folder-open" />
              <Text style={{ color: '#808080' }}>Master</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    color : '#ffff',
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  distance: {
    paddingTop: 5,
  },
});

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;