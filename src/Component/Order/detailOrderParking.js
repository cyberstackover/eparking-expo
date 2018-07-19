import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Footer, Left, Title, Thumbnail, FooterTab, List, ListItem, Right, Body, Button, Icon, Text, ScrollableTab ,Card, CardItem } from 'native-base';
import { View,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GlobalConfig from '../GlobalConfig'
export default class detailOrderParking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonUrl: GlobalConfig.SERVERHOST+'/index.php/api/order/detail/',
      isLoading: true, 
      dataResult: [], 
      initialPage: 0, 
      activeTab: 1
    }
  }

  componentDidMount(){
    AsyncStorage.getItem("orderDetailId").then((value) => {
      this.setState({ orderId: value });
    })
    AsyncStorage.getItem("tokenUser").then((value) => {
       this.setState({ token: value });
    })
    .then(res => {
      this.loadData(this.state.token);
    });
  }

  //Load Data
  async loadData(token){
    await fetch(this.state.jsonUrl+this.state.orderId,{ 
      method: 'GET',
      headers: {   
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': token
            }
       })
      .then((response) => response.json()).then((responseData) => {
        this.setState({
          isLoading: false,
          dataResult: responseData.response
        });
      }).catch((error) => {
        alert("Error Connection");
      }).done(); 
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <Body style={{flex: 1}}>
          <ActivityIndicator />
        </Body>
      );
    }
    const dtShow = this.state.dataResult[0];
    return (
      <Container>
        <Header style={{ backgroundColor: '#04245b' }}
          androidStatusBarColor="#002f81"> 
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Order")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Order Parking</Title>
          </Body>
          <Right /> 
        </Header>
        <Content>
          <List >
            <ListItem avatar>  
              <Left>
                <Thumbnail square source={{ uri: 'https://flutter.io/images/flutter-mark-square-100.png' }} />
              </Left>
              <Body> 
                <Text style={{fontSize:14, color:'#0187ec'}}>{dtShow.REGISTRY_AIRCRAFT}/{dtShow.NAME_AIRCRAFT_TYPE}/{dtShow.MOVEMENT_FROM}</Text>
                <Text note numberOfLines={3}>{dtShow.DATE_START_ORDER}{'\n'}{dtShow.NAME_MAINTENANCE_TYPE}{'\n'} Waiting Confirm</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon  name="md-create"/>
                </Button>
              </Right>
            </ListItem>
          </List>
          <Card>
            <CardItem>
              <Text>Overhaul APU</Text>
            </CardItem>
            <CardItem >
                <Text>
                2018-05-20 Until 2018-05-30
                </Text>
            </CardItem>
            <CardItem>
              <Text>2018-05-20 Until Now</Text>
            </CardItem>
            <CardItem>
              <Text>Dicky Ali</Text>
            </CardItem>
            <CardItem>
              <Text>Mohon konfirmasinya</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical
              onPress={() => navigate("Dashboard")}>
              <Icon name="apps" style={{ color: '#808080' }}/>
              <Text style={{ color: '#808080' }}>Dashboard</Text>
            </Button>
            <Button vertical active
            onPress={() => navigate("Order")}>
              <Icon active name="ios-clipboard"/>
              <Text>Order</Text>
            </Button>
            <Button vertical 
            onPress={() => navigate("Master")}>
              <Icon  name="ios-folder-open" style={{ color: '#808080' }}/>
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