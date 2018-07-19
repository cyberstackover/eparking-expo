import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Button, TabHeading, Body,Text,Title, ScrollableTab ,Card, CardItem, Icon, Right, Footer,FooterTab } from 'native-base';
import { View,StyleSheet, Image, TouchableHighlight, BackAndroid, BackHandler, Alert} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Hangar1 from './hanggar1';
import Hangar2 from './hanggar2';
import Hangar3 from './hanggar3';
import Hangar4 from './hanggar4';

export default class dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = { initialPage: 0, activeTab: 1 }
  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('Dashboard');
  }
  
  handleBackButton = () => {
   Alert.alert(
       'Exit App',
       'Exiting the application?', [{
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel'
       }, {
           text: 'OK',
           onPress: () => BackHandler.exitApp()
       }, ], {
           cancelable: false
       }
    )
    return true;
  } 
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
              onPress={() => navigate("DrawerOpen")}>
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
		<Grid style={styles.distance}>
      <TouchableHighlight onPress={() => navigate("Hangar")}>
        <Image style={{width: 440, height: 250}}
                source={require('../../Images/dashboard.png')}      
              />
               </TouchableHighlight>
            <Row style={{ backgroundColor: '#ffffff', height: '60%' }}>
				<Tabs renderTabBar={()=> <ScrollableTab style={{backgroundColor: '#04245B'}} /> } tabBarPosition="top" initialPage={this.state.initialPage} page={this.state.activeTab}>
				  <Tab heading="Hangar 1" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
						<Hangar1 data={this.props.navigation} />
				  </Tab>
				  <Tab heading="Hangar 2" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
						<Hangar2 data={this.props.navigation} />
				  </Tab>
				  <Tab heading="Hangar 3" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
						<Hangar3 data={this.props.navigation} />
				  </Tab>
				  <Tab heading="Hangar 4" tabStyle={{backgroundColor: '#04245B'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#0A3682'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
						<Hangar4 data={this.props.navigation} />
				  </Tab>
				</Tabs>
			</Row>
		</Grid>
      
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical active
            onPress={() => navigate("Dashboard")}
            >
              <Icon active name="apps"/>
              <Text>Dashboard</Text>
            </Button>  
            <Button vertical 
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