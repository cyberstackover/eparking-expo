import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Button, TabHeading, Body,Text,Title, ScrollableTab ,Card, CardItem, Icon, Right, Footer,FooterTab } from 'native-base';
import { Platform, View,StyleSheet, Image, TouchableHighlight, BackAndroid, BackHandler, Alert, AsyncStorage} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SVGallhangar from './svgallhanggar';
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

  _handleLogOut  = (navigate) => {
    Alert.alert(
      'Log out',
      'Logout your account ?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
      }, {
          text: 'OK',
          onPress: () =>  {
            AsyncStorage.removeItem('tokenUser');
            Alert.alert('Logout Account','You have been logged out.',[],{});
            navigate('Login');
          }
      }, ], {
          cancelable: false
      }
   )
   return true;
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

			// onPress={() => navigate("Hangar")}
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
              <Icon style={{color:'#fff'}} name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#fff'}}>Aircraft Hangar Parking</Title>
          </Body>
          <Right>
         
            <Button transparent onPress={() => this._handleLogOut(navigate)}>
              <Icon style={{color:'#fff'}} name='log-out' />
            </Button>
          </Right>

        </Header>
		<Grid style={styles.distance}>
      <Row style={{ backgroundColor: 'green', height: '40%',padding:0 }}>
        <SVGallhangar navigation={this.props.navigation} />
      </Row>
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
              <Icon name={Platform.OS === 'ios' ? 'ios-apps' : 'apps'} style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Dashboard</Text>
            </Button>
            <Button vertical
            onPress={() => navigate("Order")} 
            >
              <Icon active name={Platform.OS === 'ios' ? 'ios-clipboard' : 'apps'}/>
              <Text>Order</Text>
            </Button>
            <Button vertical 
            onPress={() => navigate("Swift")}
            >
              <Icon  name={Platform.OS === 'ios' ? 'ios-folder-open' : 'folder-open'} style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Swift</Text>
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

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;